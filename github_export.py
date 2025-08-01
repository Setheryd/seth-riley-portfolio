import requests
import json
import csv
from datetime import datetime
import os
import base64
from dotenv import load_dotenv

# Load environment variables from a .env file
load_dotenv()

# Configuration
# The script will now load the GITHUB_TOKEN from the .env file
GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN")
if not GITHUB_TOKEN:
    raise ValueError("GitHub token not found. Please create a .env file and add GITHUB_TOKEN='your_token'.")

USERNAME = "setheryd"  # Your GitHub username
BASE_URL = "https://api.github.com"
# The 'Accept' header is required for the Dependency Graph API (which is in preview)
HEADERS = {
    "Authorization": f"token {GITHUB_TOKEN}",
    "Accept": "application/vnd.github.hawkgirl-preview+json"
}

# A mapping of common dependency files to their package ecosystem
DEPENDENCY_FILES = {
    "requirements.txt": "pip",
    "package.json": "npm",
    "pom.xml": "maven",
    "build.gradle": "gradle",
    "Gemfile": "rubygems",
    "go.mod": "gomod"
}

def fetch_paginated_data(url):
    """Fetch all pages of data from a GitHub API endpoint."""
    results = []
    while url:
        try:
            response = requests.get(url, headers=HEADERS)
            response.raise_for_status()
            data = response.json()
            if isinstance(data, list):
                results.extend(data)
            else:
                results.append(data)
            url = response.links.get("next", {}).get("url")
        except requests.exceptions.HTTPError as e:
            print(f"Error fetching {url}: {e}")
            break
    return results

def get_repositories():
    """Fetch all repositories (owned and collaborated)."""
    repos = fetch_paginated_data(f"{BASE_URL}/user/repos?per_page=100&affiliation=owner,collaborator")
    repo_names = set()
    repo_list = []
    for repo in repos:
        if repo["full_name"] not in repo_names:
            repo_names.add(repo["full_name"])
            is_owner = repo["owner"]["login"].lower() == USERNAME.lower()
            repo_list.append({
                "name": repo["full_name"],
                "url": repo["html_url"],
                "description": repo["description"],
                "created_at": repo["created_at"],
                "updated_at": repo["updated_at"],
                "role": "owner" if is_owner else "collaborator"
            })
    return sorted(repo_list, key=lambda x: x["name"])

def get_commits(repo_name):
    """Fetch all commits for a repository."""
    try:
        commits = fetch_paginated_data(f"{BASE_URL}/repos/{repo_name}/commits?per_page=100")
        user_commits = []
        for commit in commits:
            author = commit.get("author", {}) or {}
            commit_data = commit.get("commit", {}) or {}
            author_data = commit_data.get("author", {}) or {}
            user_commits.append({
                "sha": commit.get("sha"),
                "message": commit_data.get("message"),
                "date": author_data.get("date"),
                "url": commit.get("html_url"),
                "author": author.get("login", author_data.get("email", "unknown"))
            })
        print(f"Found {len(user_commits)} commits in {repo_name}")
        return user_commits
    except requests.exceptions.HTTPError as e:
        print(f"Error fetching commits for {repo_name}: {e}")
        return []

def get_languages(repo_name):
    """Fetch programming languages used in a repository."""
    try:
        response = requests.get(f"{BASE_URL}/repos/{repo_name}/languages", headers=HEADERS)
        response.raise_for_status()
        languages = response.json()
        if languages:
            print(f"Found languages for {repo_name}: {list(languages.keys())}")
            return languages
        print(f"No languages found for {repo_name}")
        return {}
    except requests.exceptions.HTTPError as e:
        print(f"Error fetching languages for {repo_name}: {e}")
        return {}

def get_dependencies_from_files(repo_name):
    """Fallback function to get dependencies by parsing common dependency files."""
    print(f"Attempting to find dependency files in {repo_name} as a fallback...")
    dep_list = []
    for filename, ecosystem in DEPENDENCY_FILES.items():
        try:
            url = f"{BASE_URL}/repos/{repo_name}/contents/{filename}"
            response = requests.get(url, headers=HEADERS)
            if response.status_code == 200:
                content = base64.b64decode(response.json()['content']).decode('utf-8')
                # This is basic parsing and can be expanded for more accuracy
                for line in content.splitlines():
                    clean_line = line.strip()
                    if clean_line and not clean_line.startswith(('#', '//', '/*')):
                        dep_list.append({
                            "package_name": clean_line,
                            "version": "N/A",  # Version parsing can be complex and file-specific
                            "ecosystem": ecosystem,
                            "source_file": filename
                        })
                print(f"Found and parsed {filename} in {repo_name}")
        except Exception:
            # This is expected if a file doesn't exist, so we can ignore the error.
            pass
    return dep_list

def get_dependencies(repo_name):
    """Fetch dependencies for a repository using the Dependency Graph API with a fallback."""
    try:
        url = f"{BASE_URL}/repos/{repo_name}/dependency-graph/dependencies"
        response = requests.get(url, headers=HEADERS)
        
        # 403 or 404 means dependency graph is not enabled.
        if response.status_code in [403, 404]:
            print(f"Dependency Graph not enabled for {repo_name}. Trying file-based search.")
            return get_dependencies_from_files(repo_name)

        response.raise_for_status()
        data = response.json()
        dependencies = data.get("dependencies", [])
        
        if not dependencies:
            print(f"No dependencies found via API for {repo_name}. Trying file-based search.")
            return get_dependencies_from_files(repo_name)

        dep_list = []
        for dep in dependencies:
            dep_list.append({
                "package_name": dep.get("package_name"),
                "version": dep.get("requirements"),
                "ecosystem": dep.get("package_manager"),
                "source_file": "GitHub Dependency Graph API"
            })
        print(f"Found {len(dep_list)} dependencies for {repo_name} via API")
        return dep_list
    except requests.exceptions.HTTPError as e:
        print(f"Error fetching dependencies for {repo_name}: {e}. Trying file-based search.")
        return get_dependencies_from_files(repo_name)

def save_to_json(data, filename):
    """Save data to a JSON file."""
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4)

def save_commits_to_csv(commits, filename):
    """Save commit data to a CSV file."""
    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["Repository", "SHA", "Message", "Date", "URL", "Author"])
        for repo_name, repo_commits in commits.items():
            for commit in repo_commits:
                writer.writerow([
                    repo_name,
                    commit["sha"],
                    commit["message"],
                    commit["date"],
                    commit["url"],
                    commit["author"]
                ])

def main():
    """Main function to orchestrate the fetching and saving of GitHub data."""
    output_dir = f"github_data_{USERNAME}_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
    os.makedirs(output_dir, exist_ok=True)

    print("Fetching repositories...")
    repos = get_repositories()
    save_to_json(repos, os.path.join(output_dir, "repositories.json"))
    print(f"Saved {len(repos)} repositories to {output_dir}/repositories.json")

    all_commits = {}
    all_languages = {}
    all_dependencies = {}

    for repo in repos:
        repo_name = repo["name"]
        print(f"\n--- Processing {repo_name} ---")
        
        all_commits[repo_name] = get_commits(repo_name)
        all_languages[repo_name] = get_languages(repo_name)
        all_dependencies[repo_name] = get_dependencies(repo_name)

    # Save all collected data
    save_to_json(all_commits, os.path.join(output_dir, "commits.json"))
    save_commits_to_csv(all_commits, os.path.join(output_dir, "commits.csv"))
    print(f"\nSaved commit data to JSON and CSV in {output_dir}")

    save_to_json(all_languages, os.path.join(output_dir, "languages.json"))
    print(f"Saved language data to {output_dir}/languages.json")

    save_to_json(all_dependencies, os.path.join(output_dir, "dependencies.json"))
    print(f"Saved dependency data to {output_dir}/dependencies.json")

    # Print summary
    total_commits = sum(len(c) for c in all_commits.values())
    total_dependencies = sum(len(d) for d in all_dependencies.values())
    print("\n--- Summary ---")
    print(f"Total repositories processed: {len(repos)}")
    print(f"Total commits fetched: {total_commits}")
    print(f"Total dependencies found: {total_dependencies}")
    print(f"All data saved in directory: {output_dir}")

if __name__ == "__main__":
    main()
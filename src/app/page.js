// src/app/page.js
import styles from './page.module.css';

// --- DATA ---
// Easily update your projects by adding/editing items in this array
const projects = [
  {
    name: "Adhere-API",
    href: "https://github.com/Setheryd/Adhere-API",
    description: "Backend API for running automated healthcare compliance and eligibility status checks, serving as the data backbone for the Adhere platform.",
    tags: ["Python", "FastAPI", "Playwright", "API Design"],
  },
  {
    name: "AiDGENT Platform",
    href: "https://github.com/luakitch/AiDGENT",
    description: "The core intelligent agent platform for Acceling Software. A massive Python-based project for automation, data extraction, and processing.",
    tags: ["Python", "Machine Learning", "Automation", "Tcl", "C/C++"],
  },
  {
    name: "Adhere (Electron App)",
    href: "https://github.com/luakitch/Adhere",
    description: "A cross-platform desktop application for healthcare compliance, built with Electron and featuring robust data handling and a rich user interface.",
    tags: ["JavaScript", "Electron", "CSS", "HTML", "Desktop App"],
  },
  {
    name: "PrivatePayLTSS",
    href: "https://github.com/Setheryd/PrivatePayLTSS",
    description: "A full-stack web portal for Absolute Caregivers' private pay clients, featuring service selection, user authentication, and Stripe payment integration.",
    tags: ["Vue.js", "Vite", "Firebase", "Stripe"],
  },
  {
    name: "AutoSyncPro-Electron",
    href: "https://github.com/luakitch/AutoSyncPro-Electron",
    description: "A professional data synchronization desktop application built with Electron, featuring a complex JavaScript frontend and logic for syncing data.",
    tags: ["JavaScript", "Electron", "Node.js", "CSS", "HTML"],
  },
    {
    name: "Pavillio-EMR-API",
    href: "https://github.com/Setheryd/Pavillio-EMR-API",
    description: "Developed a crucial API to enable read/write operations for the Pavillio Electronic Medical Record (EMR) system, streamlining data integration.",
    tags: ["JavaScript", "Node.js", "Express", "Axios", "API"],
  },
  {
    name: "Visit-Note-Generation",
    href: "https://github.com/Setheryd/Visit-Note-Generation",
    description: "A complex Python-based system to automate the generation of visit notes from raw data, heavily utilizing data processing and templating.",
    tags: ["Python", "Data Processing", "Automation", "PDF"],
  },
  {
    name: "Acceling-Software WebApp",
    href: "https://github.com/luakitch/AccelingSoftware-WebApp",
    description: "The primary web application for Acceling Software, developed to deliver a wide range of business solutions using modern web technologies.",
    tags: ["JavaScript", "CSS", "HTML", "Full-Stack"],
  },
];

// Your skills - add or remove as needed
const skills = [
  {
    category: "Languages & Databases",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "MySQL", "MSSQL", "Oracle", "PostgreSQL", "Snowflake", "PySpark", "R"],
  },
  {
    category: "Frameworks & Tools",
    items: ["FastAPI", "Node.js", "Express", "Vue.js", "Next.js", "React", "Electron", "Pandas", "Selenium", "Playwright", "Tableau", "Power BI", "Docker"],
  },
  {
    category: "Platforms & Methodologies",
    items: ["Git", "GitHub", "JIRA", "Firebase", "Vercel", "ETL/ELT", "Data Modeling", "Agile", "CI/CD", "Machine Learning", "NLP"],
  },
];

// Your professional experience
const experience = [
    {
    title: "Director of Innovation and Data Analytics",
    company: "Acceling Software LLC",
    duration: "Jan 2024 – Present",
    details: [
        "Lead the development of new software solutions and data strategies to drive business growth.",
        "Architect and build APIs, automation tools, and data processing pipelines.",
        "Oversee project lifecycles from ideation and requirements gathering to deployment and maintenance."
    ],
  },
  {
    title: "Senior Data Analyst",
    company: "Absolute Caregivers | Indianapolis, IN",
    duration: "Mar 2022 – Present",
    details: [
      "Developed predictive models to forecast key metrics, resulting in a 15% increase in operational efficiency.",
      "Created and managed interactive dashboards in Tableau for executive and cross-functional teams.",
      "Engineered data-wrangling and cleaning processes to ensure accuracy and consistency across large datasets.",
      "Mentored junior analysts and conducted workshops on data analysis techniques and best practices."
    ],
  },
  {
    title: "President",
    company: "Riley Investment Group LLC",
    duration: "Jan 2021 – Present",
    details: [
        "Manage investment strategies and operations for the organization.",
        "Utilize data analysis to identify market trends and opportunities."
    ],
  },
  {
    title: "Data Analyst",
    company: "Custom Concrete",
    duration: "Feb 2019 – Mar 2022",
    details: [
      "Created database designs (Fact, Dimension, Logical models) using the Erwin tool.",
      "Collaborated with BI and ETL developers to resolve data-related problem tickets.",
      "Conducted data mining and exploratory analysis to support marketing and product development.",
    ],
  },
];


// --- COMPONENT ---
export default function HomePage() {
  return (
    <main className={styles.main}>
      {/* --- HERO SECTION --- */}
      <header className={styles.hero}>
        <h1 className={styles.title}>Seth Riley</h1>
        <p className={styles.subtitle}>Director of Innovation & Data Analytics | Software Engineer</p>
        <p className={styles.summary}>
          A technology leader and hands-on developer with over 7 years of experience driving business growth through data-driven strategy, process automation, and full-stack software development.
        </p>
        <div className={styles.links}>
          <a href="https://github.com/Setheryd" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/seth-riley/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:seth.riley@comcast.net">Email</a>
        </div>
      </header>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className={styles.section}>
        <h2>About Me</h2>
        <p>
          As a results-oriented Director and Software Engineer, I specialize in bridging the gap between high-level business objectives and practical, scalable technology solutions. My experience spans the full project lifecycle, from conceptualization and data modeling to developing robust APIs and building user-friendly web applications. I am a dedicated problem-solver with a strong foundation in SQL, Python, machine learning, and data visualization, complemented by leadership experience in guiding technical projects. I thrive on creating efficient systems that have a measurable impact on revenue and operational efficiency.
        </p>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className={styles.section}>
        <h2>Featured Projects</h2>
        <p className={styles.sectionSubtitle}>
          Here is a selection of my work, showcasing my skills in API development, full-stack applications, and data automation. As a collaborator and leader, I value teamwork and hands-on problem-solving.
        </p>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div className={styles.card} key={project.name}>
              <h3><a href={project.href} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
              <p>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className={styles.section}>
        <h2>Skills & Expertise</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h4>{skillGroup.category}</h4>
              <ul>
                {skillGroup.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
      
      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className={styles.section}>
        <h2>Professional Experience</h2>
        <div className={styles.timeline}>
          {experience.map((job) => (
            <div className={styles.timelineItem} key={job.company}>
              <h3>{job.title}</h3>
              <p><strong>{job.company}</strong></p>
              <p><em>{job.duration}</em></p>
              {job.details && (
                <ul>
                  {job.details.map((detail, index) => <li key={index}>{detail}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
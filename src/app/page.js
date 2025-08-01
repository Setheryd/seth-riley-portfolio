// src/app/page.js
'use client'; // This directive is necessary for React Hooks

import { useEffect } from 'react';
import styles from './page.module.css';

// --- DATA ---
const projects = [
  {
    name: "Adhere-API",
    href: "https://github.com/Setheryd/Adhere-API",
    description: "Backend API for running automated healthcare compliance and eligibility status checks, serving as the data backbone for the Adhere platform.",
    tags: ["Python", "FastAPI", "Playwright", "API Design"],
    isPrivate: false,
  },
  {
    name: "AiDGENT Platform",
    href: "#", // No public link
    description: "The core intelligent agent platform for Acceling Software. A massive Python-based project for automation, data extraction, and processing.",
    tags: ["Python", "Machine Learning", "Automation", "Tcl"],
    isPrivate: true,
  },
  {
    name: "Adhere (Electron App)",
    href: "#",
    description: "A cross-platform desktop application for healthcare compliance, built with Electron and featuring robust data handling and a rich user interface.",
    tags: ["JavaScript", "Electron", "CSS", "HTML", "Desktop App"],
    isPrivate: true,
  },
  {
    name: "PrivatePayLTSS",
    href: "https://github.com/Setheryd/PrivatePayLTSS",
    description: "A full-stack web portal for Absolute Caregivers' private pay clients, featuring user auth and Stripe payment integration.",
    tags: ["Vue.js", "Vite", "Firebase", "Stripe"],
    isPrivate: false,
  },
  {
    name: "AutoSyncPro-Electron",
    href: "#",
    description: "A professional data synchronization desktop application built with Electron, featuring a complex JavaScript frontend for syncing data.",
    tags: ["JavaScript", "Electron", "Node.js", "CSS"],
    isPrivate: true,
  },
  {
    name: "serverless_api_router",
    href: "https://github.com/Setheryd/serverless_acceling_software_api_router",
    description: "A Next.js project demonstrating a serverless API architecture connected to a Neon serverless Postgres database for scalable performance.",
    tags: ["Next.js", "Serverless", "PostgreSQL", "Prisma"],
    isPrivate: false,
  },
  {
    name: "Visit-Note-Generation",
    href: "https://github.com/Setheryd/Visit-Note-Generation",
    description: "A complex Python-based system to automate the generation of visit notes from raw data, heavily utilizing data processing and templating.",
    tags: ["Python", "Data Processing", "Automation", "PDF"],
    isPrivate: false,
  },
  {
    name: "Pokemon Card Analyzer",
    href: "https://github.com/Setheryd/pokemon-card-analyzer",
    description: "A fun personal project that uses multiple APIs (including OCR with Tesseract.js) to identify, evaluate, and value Pokémon cards from an image.",
    tags: ["JavaScript", "Node.js", "Tesseract.js", "Axios"],
    isPrivate: false,
  },
  {
    name: "Acceling-Software WebApp",
    href: "https://github.com/luakitch/AccelingSoftware-WebApp",
    description: "The primary web application for Acceling Software, developed to deliver a wide range of business solutions using modern web technologies.",
    tags: ["JavaScript", "CSS", "HTML", "Full-Stack"],
    isPrivate: true, // Assuming this is also private
  },
];

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

const experience = [
  {
    title: "Director of Innovation / Lead Data Analyst",
    company: "Acceling Software / Absolute Caregivers, LLC",
    duration: "Mar 2022 – Present",
    details: [
        "Lead the development of new software solutions and data strategies to drive business growth at Acceling Software.",
        "Architect and build APIs, automation tools, and full-stack applications to solve complex business problems.",
        "Analyze and interpret large-scale healthcare datasets at Absolute Caregivers to optimize business operations and improve patient outcomes.",
        "Develop predictive models to forecast key metrics, resulting in a 15% increase in operational efficiency.",
        "Create data visualizations and reports to communicate complex findings to management and stakeholders.",
    ],
  },
  {
    title: "Data Integrity Analyst",
    company: "Custom Concrete",
    duration: "Nov 2021 – Mar 2022",
    details: [
      "Interpreted complex datasets from sales, marketing, and finance to identify business trends and areas for improvement.",
      "Presented bi-monthly data analysis findings to upper management to inform strategic decision-making.",
      "Collaborated on data analysis projects to uncover actionable insights through statistical techniques."
    ],
  },
  {
    title: "Residential Project Coordinator",
    company: "Custom Concrete",
    duration: "Mar 2020 – Nov 2021",
    details: [
      "Managed single-home construction projects valued at up to $15M by interpreting blueprints and project specifications.",
      "Instituted the use of Microsoft Project to track timelines and costs, significantly improving project estimate accuracy.",
      "Acted as a key liaison between corporate staff, construction teams, and vendors to ensure project alignment."
    ],
  },
];


// --- COMPONENT ---
export default function HomePage() {
  
  // This useEffect hook handles the scroll-based rotation for the background shapes.
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress from 0 to 1
      const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      // Set a CSS custom property that the CSS file can use
      document.body.style.setProperty('--scroll-progress', scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Frosted Glass SVG Background Shapes */}
      <div className={styles.backgroundShapes}>
        <div className={styles.shape1}>
            <svg width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M625 350C625 221.4 566.4 58.6 350 58.6C133.6 58.6 75 221.4 75 350C75 478.6 133.6 641.4 350 641.4C566.4 641.4 625 478.6 625 350Z" stroke="white" strokeOpacity="0.1" strokeWidth="2"/>
            </svg>
        </div>
        <div className={styles.shape2}>
            <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M410.5 499.5C532.5 428.5 545 295 545 150C545 5.00002 433 -32.5 300 37.5C167 107.5 5.00001 5.00001 5.00001 150C5.00001 295 59.5 450 171.5 519.5C283.5 589 288.5 570.5 410.5 499.5Z" stroke="white" strokeOpacity="0.1" strokeWidth="2"/>
            </svg>
        </div>
      </div>

      <main className={styles.main}>
        {/* --- HERO SECTION --- */}
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Seth Riley</h1>
            <p className={styles.subtitle}>Director of Innovation & Data Analytics | Software Engineer</p>
            <p className={styles.summary}>
              A technology leader and hands-on developer with over 7 years of experience driving business growth through data-driven strategy, process automation, and full-stack software development.
            </p>
            <div className={styles.links}>
              <a href="https://github.com/Setheryd" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/seth-riley/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:seth@rileyinvestmentgroup.com">Email</a>
            </div>
          </div>
        </header>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className={styles.section}>
          <h2>Featured Projects</h2>
          <p className={styles.sectionSubtitle}>
            Here is a selection of my work. 
            <em> Note: Some repositories are private to protect sensitive information and will not have public links.</em>
          </p>
          <div className={styles.grid}>
            {projects.map((project) => (
              <div className={styles.card} key={project.name}>
                <div className={styles.assetPlaceholder}></div>
                <div className={styles.cardContent}>
                  <h3>
                    {project.isPrivate ? (
                      project.name
                    ) : (
                      <a href={project.href} target="_blank" rel="noopener noreferrer">{project.name}</a>
                    )}
                  </h3>
                  <p>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
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
              <div className={styles.timelineItem} key={job.title}>
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
    </>
  );
}
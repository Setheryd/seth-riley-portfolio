// src/app/page.js
'use client'; // This directive is necessary to use React Hooks like useEffect

import { useEffect } from 'react';
import styles from './page.module.css';

// --- DATA ---
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
    name: "serverless_acceling_software_api_router",
    href: "https://github.com/Setheryd/serverless_acceling_software_api_router",
    description: "A Next.js project demonstrating a serverless API architecture connected to a Neon serverless Postgres database for scalable performance.",
    tags: ["Next.js", "Serverless", "PostgreSQL", "Prisma"],
  },
  {
    name: "Visit-Note-Generation",
    href: "https://github.com/Setheryd/Visit-Note-Generation",
    description: "A complex Python-based system to automate the generation of visit notes from raw data, heavily utilizing data processing and templating.",
    tags: ["Python", "Data Processing", "Automation", "PDF"],
  },
  {
    name: "Pokemon Card Analyzer",
    href: "https://github.com/Setheryd/pokemon-card-analyzer",
    description: "A fun personal project that uses multiple APIs (including OCR with Tesseract.js) to identify, evaluate, and value Pokémon cards from an image.",
    tags: ["JavaScript", "Node.js", "Tesseract.js", "Axios"],
  },
  {
    name: "Acceling-Software WebApp",
    href: "https://github.com/luakitch/AccelingSoftware-WebApp",
    description: "The primary web application for Acceling Software, developed to deliver a wide range of business solutions using modern web technologies.",
    tags: ["JavaScript", "CSS", "HTML", "Full-Stack"],
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
  
  // This useEffect hook handles the mouse-tracking light effect for the hero section.
  useEffect(() => {
    const hero = document.getElementById('hero-section');
    if (!hero) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { offsetLeft, offsetTop } = hero;
      const x = clientX - offsetLeft;
      const y = clientY - offsetTop;
      hero.style.setProperty('--mouse-x', `${x}px`);
      hero.style.setProperty('--mouse-y', `${y}px`);
    };

    hero.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // The empty dependency array ensures this runs only once on mount

  return (
    <main className={styles.main}>
      {/* --- HERO SECTION --- */}
      <header id="hero-section" className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Seth Riley</h1>
          <p className={styles.subtitle}>Director of Innovation & Data Analytics | Software Engineer</p>
          <p className={styles.summary}>
            A technology leader and hands-on developer with over 7 years of experience driving business growth through data-driven strategy, process automation, and full-stack software development.
          </p>
          <div className={styles.links}>
            <a href="https://github.com/Setheryd" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/seth-riley/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:seth@rileyinvestmentgroup.com">seth@rileyinvestmentgroup.com</a>
          </div>
        </div>
      </header>

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
  );
}
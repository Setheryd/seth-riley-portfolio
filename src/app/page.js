'use client';

import { useEffect } from 'react';
import styles from './page.module.css'; 
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';


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


export default function HomePage() {
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
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
        {/* ... your SVG code ... */}
      </div>

      <main className={styles.main}>
        <Hero />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Experience experience={experience} />
      </main>
    </>
  );
}
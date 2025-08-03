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

// In src/app/page.js
const skills = [
  {
    category: "Cloud & DevOps",
    items: ["Azure (Container Apps, Data Factory)", "Oracle Cloud (OCI)", "Docker", "Git", "GitHub Actions (CI/CD)", "Cron", "Bash Scripting"],
  },
  {
    category: "Data Engineering & Warehousing",
    items: ["Python (Pandas, PySpark)", "SQL", "ETL / ELT", "Oracle", "PostgreSQL", "Snowflake", "Data Architecture", "Data Modeling", "Data Governance"],
  },
  {
    category: "Backend & API Development",
    items: ["Flask", "FastAPI", "Node.js", "Express.js", "REST APIs", "Webhooks", "Nginx", "API Design & Security", "Microservices"],
  },
  {
    category: "AI & Machine Learning",
    items: ["Google Gemini API", "Natural Language Processing (NLP)", "Predictive Modeling", "Scikit-learn", "Jupyter Notebooks", "LangChain"],
  },
  {
    category: "Frontend & Visualization",
    items: ["Next.js", "Vue.js", "React", "JavaScript/TypeScript", "Electron", "Tableau", "Power BI", "Metabase", "DAX"],
  },
];

const experience = [
  {
    title: "Director of Data Engineering & AI Solutions",
    company: "Acceling Software LLC",
    duration: "July 2024 - Present",
    details: [
      "Spearheaded a multi-disciplinary engineering team to architect and deploy end-to-end data solutions, transforming raw data into monetizable API products.",
      "Engineered a cloud data platform on Azure and OCI that successfully supported a 400% user base increase without performance degradation.",
      "Delivered a 400% revenue uplift by launching a new API-first data product, managing the entire lifecycle from data ingestion to monetization.",
      "Automated over 90% of manual data processing by deploying a fleet of resilient Playwright scrapers and ETL jobs.",
    ],
  },
  {
    title: "Director of Innovation and Intake",
    company: "Absolute Caregivers, LLC",
    duration: "Mar 2022 – Present",
    details: [
      "Architected and executed a complete overhaul of the patient intake and data management infrastructure, enabling a 400% increase in patient base capacity.",
      "Championed the company's innovation strategy, deploying new technologies like predictive analytics and process automation tools.",
      "Led quarterly, company-wide business intelligence presentations, translating complex performance metrics into actionable insights for executive leadership.",
      "Developed and governed the enterprise data strategy, establishing KPIs and data governance policies.",
    ],
  },
   {
    title: "Lead Data Analyst",
    company: "Ability Home Health LLC",
    duration: "Mar 2022 – Present",
    details: [
      "Analyzed large-scale healthcare datasets to optimize business operations, contributing to a 15% increase in operational efficiency.",
      "Developed and maintained Tableau dashboards for executive reporting on key healthcare metrics.",
    ],
  },
  {
    title: "Data Integrity & Project Coordination",
    company: "Custom Concrete",
    duration: "Mar 2020 – Mar 2022",
    details: [
      "Managed construction projects valued at up to $15M, leveraging MS Project to track timelines, analyze costs, and improve estimate accuracy.",
      "Analyzed cross-departmental datasets (Sales, Finance) to identify performance trends and provide data-driven recommendations.",
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
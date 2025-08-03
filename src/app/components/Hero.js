import Image from 'next/image';
import styles from '@/app/page.module.css';
import headshot from '@/app/assets/headshot.png';

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.heroTextContainer}>
      <h1 className={styles.heroTitle}>Seth Riley</h1>
      <h2 className={styles.heroSubtitle}>Data Engineer & AI Solutions Architect</h2>
      <p className={styles.heroDescription}>
        I architect and build scalable, end-to-end data systems that transform complex information into valuable, monetizable API products and intelligent business solutions.
      </p>
      <div className={styles.heroActions}>
        <a href="#projects" className={styles.ctaButton}>View My Work</a>
        <a href="https://www.linkedin.com/in/seth-riley" target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>Connect on LinkedIn</a>
      </div>
    </div>

    <div className={styles.heroImageContainer}>
      <Image 
        src={headshot}
        alt="Headshot of Seth Riley, Data Engineer and AI Solutions Architect"
        width={280}
        height={280}
        priority={true} // Helps with page load performance
        className={styles.heroImage}
      />
      {/* This SVG creates the animated, rotating frame */}
      <svg className={styles.heroImageFrame} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" />
      </svg>
    </div>
  </section>
);

export default Hero;
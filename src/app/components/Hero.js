import styles from '@/app/page.module.css';

const Hero = () => (
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
);

export default Hero;
import styles from '@/app/page.module.css';

const Hero = () => (
  <section className={styles.hero}>
    <h1 className={styles.heroTitle}>Seth Riley</h1>
    <h2 className={styles.heroSubtitle}>Data Engineer & AI Solutions Architect</h2>
    <p className={styles.heroDescription}>
      I architect and build scalable, end-to-end data systems that transform complex information into valuable, monetizable API products and intelligent business solutions.
    </p>
    <div className={styles.heroActions}>
      <a href="#projects" className={styles.ctaButton}>View My Work</a>
      <a href="https://www.linkedin.com/in/seth-riley" target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>Connect on LinkedIn</a>
    </div>
  </section>
);

export default Hero;
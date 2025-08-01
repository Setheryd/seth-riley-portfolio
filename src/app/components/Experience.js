import styles from '@/app/page.module.css';

const Experience = ({ experience }) => (
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
);

export default Experience;
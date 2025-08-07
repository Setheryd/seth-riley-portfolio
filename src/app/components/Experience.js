import styles from '@/app/page.module.css';

const Experience = ({ experience }) => (
  <section id="experience" className={`${styles.section} gradient-bg`}>
    <h2 className={`${styles.sectionTitle} fade-in-up text-glow`}>Professional Experience</h2>
    <div className={styles.timeline}>
      {experience.map((job, index) => (
        <div className={`${styles.timelineItem} fade-in-up`} key={job.title} style={{ animationDelay: `${index * 0.3}s` }}>
          <h3 className="text-glow">{job.title}</h3>
          <p><strong>{job.company}</strong></p>
          <p><em>{job.duration}</em></p>
          {job.details && (
            <ul>
              {job.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="animated-svg">{detail}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
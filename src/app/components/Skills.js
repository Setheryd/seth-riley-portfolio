import styles from '@/app/page.module.css';

const Skills = ({ skills }) => (
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
);

export default Skills;
// src/app/components/Skills.js
import styles from '@/app/page.module.css';

const Skills = ({ skills }) => (
  <section id="skills" className={styles.section}>
    <h2>Core Technologies & Stack</h2>
    <div className={styles.skillsContainer}>
      {skills.map((skillGroup) => (
        <div className={styles.skillCategory} key={skillGroup.category}>
          <h4>{skillGroup.category}</h4>
          <div className={styles.skillItems}>
            {skillGroup.items.map(item => (
              <span key={item} className={styles.skillItem}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
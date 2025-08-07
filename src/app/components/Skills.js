// src/app/components/Skills.js
import styles from '@/app/page.module.css';

const Skills = ({ skills }) => (
  <section id="skills" className={`${styles.section} gradient-bg`}>
    <h2 className={`${styles.sectionTitle} fade-in-up text-glow`}>Core Technologies & Stack</h2>
    <div className={styles.skillsContainer}>
      {skills.map((skillGroup, categoryIndex) => (
        <div className={`${styles.skillCategory} fade-in-up`} key={skillGroup.category} style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
          <h4 className="text-glow">{skillGroup.category}</h4>
          <div className={styles.skillItems}>
            {skillGroup.items.map((item, skillIndex) => (
              <span 
                key={item} 
                className={`${styles.skillItem} animated-svg hover-lift`}
                style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.05)}s` }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
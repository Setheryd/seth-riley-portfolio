import styles from '@/app/page.module.css';

const Projects = ({ projects }) => (
  <section id="projects" className={`${styles.section} gradient-bg`}>
    <h2 className={`${styles.sectionTitle} fade-in-up hero-gradient`}>Featured Projects</h2>
    <p className={`${styles.sectionSubtitle} fade-in-up`}>
      Here is a selection of my work.
      <em> Note: Some repositories are private to protect sensitive information and will not have public links.</em>
    </p>
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <div 
          className={`${styles.card} magnetic-card project-card-glow project-svg-border project-pulse hover-lift fade-in-up`} 
          key={project.name}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className={styles.assetPlaceholder}></div>
          <div className={styles.cardContent}>
            <h3>
              {project.isPrivate ? (
                <span className="text-glow">{project.name}</span>
              ) : (
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="text-glow">{project.name}</a>
              )}
            </h3>
            <p>{project.description}</p>
                         <div className={styles.tags}>
               {project.tags.map(tag => (
                 <span key={tag} className="animated-svg project-tag-glow project-tag-sparkle">{tag}</span>
               ))}
             </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
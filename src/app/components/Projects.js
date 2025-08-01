import styles from '@/app/page.module.css';

const Projects = ({ projects }) => (
  <section id="projects" className={styles.section}>
    <h2>Featured Projects</h2>
    <p className={styles.sectionSubtitle}>
      Here is a selection of my work.
      <em> Note: Some repositories are private to protect sensitive information and will not have public links.</em>
    </p>
    <div className={styles.grid}>
      {projects.map((project) => (
        <div className={styles.card} key={project.name}>
          <div className={styles.assetPlaceholder}></div>
          <div className={styles.cardContent}>
            <h3>
              {project.isPrivate ? (
                project.name
              ) : (
                <a href={project.href} target="_blank" rel="noopener noreferrer">{project.name}</a>
              )}
            </h3>
            <p>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
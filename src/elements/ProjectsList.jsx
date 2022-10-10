import ProjectPreview from './ProjectPreview'
import styles from './Plist.module.css'

function ProjectsList (props) {
  return (
    <>
      <ul className={styles.cardCont}>
        {props.projects.map((project, i) =>
        <ProjectPreview title={project.title} key={i} image={project.image}/>
        )}
      </ul>
    </>
  )
}

export default ProjectsList
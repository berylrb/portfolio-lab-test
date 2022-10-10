import { projects } from "../data/projects"
import ProjectsList from '../elements/ProjectsList'
import styles from './Projects.module.css'
import NavBar from '../elements/NavBar';

function Projects() {
  return (
    <>
      <NavBar />
      <div className={styles.bodyDiv}>
        <h1>Projects</h1>
        <div className={styles.cardCont}>
          <ProjectsList projects={projects} />
        </div>
      </div>
    </>
  )
}


export default Projects
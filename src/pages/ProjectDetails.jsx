import { projects } from "../data/projects";
import findProject from "../utilities/findProject";
import { useLocation } from "react-router-dom";
import NavBar from '../elements/NavBar';
import styles from './ProjectDetails.module.css'

function ProjectDetails() {
  const location = useLocation()
  const project = findProject(location.pathname)
  return (
    <>
      <NavBar />
      <div className={styles.bodyDiv}>
        <div className={styles.details}>
          <h1>{project.title}</h1>
          <img src={project.image} alt='proj 1 screenshot' className={styles.img} />
          <p>{project.description}</p>
          <div className={styles.buttons}>
            <a href={project.repositoryLink}
              target='_blank'
              rel='noreferrer'
            >
              <button className={styles.button66}>GitHub</button>
            </a>
            <a href={project.deployment}
              target='_blank'
              rel='noreferrer'
            >
              <button className={styles.button66}>Launch</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails
import { projects } from "../data/projects";
import findProject from "../utilities/findProject";
import { useLocation } from "react-router-dom";

function ProjectDetails () {
  const location = useLocation()
  const project = findProject(location.pathname)
  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt='proj 1 screenshot'/>
      <a href={project.repositoryLink}
      target='_blank'
      rel='noreferrer'
      >
      <button>GitHub</button>
      </a>
      <a href={project.deployment}
      target='_blank'
      rel='noreferrer'
      >
      <button>Launch</button>
      </a>
    </>
  )
}

export default ProjectDetails
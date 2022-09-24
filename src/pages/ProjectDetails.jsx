import { projects } from "../data/projects";

function ProjectDetails () {
  return (
    <>
      <h1>{projects[0].title}</h1>
      <p>{projects[0].description}</p>
      <img src={projects[0].image} alt='proj 1 screenshot'/>
      <a href={projects[0].repositoryLink}
      target='_blank'
      rel='noreferrer'
      >
      <button>GitHub</button>
      </a>
      <a href={projects[0].deployment}
      target='_blank'
      rel='noreferrer'
      >
      <button>Launch</button>
      </a>
    </>
  )
}

export default ProjectDetails
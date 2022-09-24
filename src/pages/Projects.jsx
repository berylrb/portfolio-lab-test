import { projects } from "../data/projects"
import ProjectsList from '../elements/ProjectsList'

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <ProjectsList projects={projects}/>
    </>
  )
}


export default Projects
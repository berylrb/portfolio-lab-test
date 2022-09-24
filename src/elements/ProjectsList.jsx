import ProjectPreview from './ProjectPreview'

function ProjectsList (props) {
  return (
    <>
      <h2>My Projects</h2>
      <ul>
        {props.projects.map((project, i) =>
        <ProjectPreview title={project.title} key={i} image={project.image}/>
        )}
      </ul>
    </>
  )
}

export default ProjectsList
import hyphenateWords from './hyphenateWords'
import { projects } from "../data/projects"

function findProject (str) {
  const title = str.replace('/projects/', '')

  const foundProject = projects.find(project => {
    const thisTitle = hyphenateWords(project.title)
    return thisTitle === title
  })
  
  return foundProject
}

export default findProject
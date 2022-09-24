import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import hyphenateWords from "../utilities/hyphenateWords";

function ProjectPreview (props) {
  const path = hyphenateWords(props.title)
  return (
    <Card>
      <Card.Img 
        variant='top'
        src={props.image}
      />
      <Card.Body>
        <Card.Title>
          <Link to={path}>
            <button variant='primary'>
              Explore
            </button>
          </Link>
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default ProjectPreview
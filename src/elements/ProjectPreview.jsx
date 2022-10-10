import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import hyphenateWords from "../utilities/hyphenateWords";
import styles from './Preview.module.css'

function ProjectPreview(props) {
  const path = hyphenateWords(props.title)
  return (
    <Link to={path}>
      <div className={styles.wrapper}>
        <Card className={styles.card}>
          <div className={styles.overlay}>
            <div className={styles.projTitle}>
              {props.title}
            </div>
          </div>
          <Card.Img
            variant='top'
            src={props.image}
            className={styles.cardImg}
          />
          <Card.Body>
            <Card.Title>
            </Card.Title>
          </Card.Body>

        </Card>
      </div>
    </Link>
  )
}

export default ProjectPreview
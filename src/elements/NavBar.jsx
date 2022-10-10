import { Container, Navbar, Nav } from "react-bootstrap"
import styles from './Nav.module.css'
import { Link } from "react-router-dom"


function NavBar() {

  return (
    <Navbar className={styles.navBody}>
      <Container className={styles.navCon}>
        <Nav className={styles.nav}>
          <Link to='/home' className={styles.navLink}>
            HOME
          </Link>
          <Link to='/about' className={styles.navLink}>
            ABOUT
          </Link>

          <Link to='/contact' className={styles.navLink}>
            CONTACT
          </Link>
          
          <Link to='/projects' className={styles.navLink}>
            PROJECTS
          </Link>

          <Link to='/resume' className={styles.navLink}>
            RESUME
          </Link>

        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar
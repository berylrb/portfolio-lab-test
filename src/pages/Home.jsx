import Headshot from '../assets/headshot2.jpg'
import styles from './Home.module.css'
import Email from '../assets/email.png'
import Rocket from '../assets/rocket2.png'
import Cv from '../assets/cv.png'
import Ab from '../assets/card.png'
import Wave from '../assets/wave.png'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
      <div className={styles.bodyDiv}>
        <div className={styles.imgText}>
          <img className={styles.imgClass} src={Wave} alt='headshot' />
          <h2>Hi, I'm Beryl -- a software engineer and startup founder.</h2>
        </div>
        <div className={styles.iconDiv}>
          <Link to='/about' className={styles.navLink}>
            <img className={styles.navIcon} src={Ab} alt='card icon button link' />
            <p>ABOUT</p>
          </Link>

          <Link to='/contact' className={styles.navLink}>
            <img className={styles.navIcon} src={Email} alt='email icon button link' />
            <p>CONTACT</p>
          </Link>

          <Link to='/projects' className={styles.navLink}>
            <img className={styles.navIcon} src={Rocket} alt='rocket icon button link' />
            <p>PROJECTS</p>
          </Link>

          <Link to='/resume' className={styles.navLink}>
            <img className={styles.navIcon} src={Cv} alt='cv icon button link' />
            <p>RESUME</p>
          </Link>

        </div>
      </div>
    </>

  )
}


export default Home
import Headshot from '../assets/headshot2.jpg'
import styles from './About.module.css'

function About() {
  return (
    <>
      <div className={styles.aboutDiv}>
        <div className={styles.imgText}>
          <img src={Headshot} alt='headshot' className={styles.imgClass} />
          <div className={styles.p}>
          <h2 className={styles.h1}>About Me</h2>
            <p>I'm Beryl, a fullstack software engineer and startup founder who loves creating animations, illustrations, and interactive digital products that help solve real world problems-- no matter how small.
              <br />
              <br />
              I strive to achieve a delicate balance between the technical and visual elements of every project I pursue (and can never decide which I love more).
              <br />
              <br />
              I hold a BA in Psychology and Certificate of Innovation & Entrepreneurship from Duke University, as well as a Software Engineering Immersive Certificate from General Assembly.</p>
          </div>
        </div>
      </div>
    </>
  )
}


export default About
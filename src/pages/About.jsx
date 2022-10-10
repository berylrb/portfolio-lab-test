import Headshot from '../assets/headshot2.jpg'
import styles from './About.module.css'
import NavBar from '../elements/NavBar';

function About() {
  return (
    <>
      <NavBar />
      <div className={styles.aboutDiv}>
        <div className={styles.imgText}>
          <img src={Headshot} alt='headshot' className={styles.imgClass} />
          <div className={styles.p}>
            <h2 className={styles.h1}>About Beryl</h2>
            <p>I'm Beryl, a fullstack software engineer and startup founder who loves creating animations, illustrations, and interactive digital products that help solve real world problems-- no matter how small.
              <br />
              <br />
              I strive to achieve a delicate balance between the technical and visual elements of every project I pursue (and can never decide which I love more).
              <br />
              <br />
              I hold a BA in Psychology and Certificate of Innovation & Entrepreneurship from Duke University, as well as a Software Engineering Immersive Certificate from General Assembly.</p>
          </div>
        </div>
        <div className={styles.interestsDiv}>
          <h3>I'm also a...</h3>

          <ul className={styles.interests}>

            <li className={styles.emojiP}>
              <p>👾</p>
              <p>gamer</p>
            </li>
            <li className={styles.emojiP}>
              <p>🐼</p>
              <p>animal lover</p>
            </li>
            <li className={styles.emojiP}>
              <p>🏐</p>
              <p>volleyball player</p>
            </li>
            <li className={styles.emojiP}>
              <p>🏳️‍🌈</p>
              <p>ally</p>
            </li>
            <li className={styles.emojiP}>
              <p>🏔️</p>
              <p>traveller</p>
            </li>
            <li className={styles.emojiP}>
              <p>🎤</p>
              <p>musician</p>
            </li>
            <li className={styles.emojiP}>
              <p>🎨</p>
              <p>artist</p>
            </li>
            <li className={styles.emojiP}>
              <p>👩🏽‍🍳</p>
              <p>wannabe chef</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}


export default About
import NavBar from '../elements/NavBar'
import styles from './Contact.module.css'
import Email from '../assets/email.png'

function Contact() {
  return (
    <>
      <NavBar />
      <div className={styles.bodyDiv}>
        <div className={styles.iconText}>
          <a href='mailto: beryl.baldwin@generalassemb.ly' className={styles.navLink}>
            <img className={styles.navIcon} src={Email} alt='email icon button link' />
          </a>
          <h3>I'd love to hear from you!  if you have questions, comments, or would like to work together, email me by clicking the icon above.</h3>
        </div>
      </div>
    </>
  )
}


export default Contact
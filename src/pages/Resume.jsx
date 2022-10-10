import styles from './Resume.module.css'
import NavBar from '../elements/NavBar'
import Cv from '../assets/cv.png'


function Resume() {
  const onButtonClick = () => {
    fetch('Portfolio-Resume-Beryl-Baldwin.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Portfolio-Resume-Beryl-Baldwin.pdf';
            alink.click();
        })
    })
}
  return (
    <>
      <NavBar />
      <div className={styles.bodyDiv}>
          <img onClick={onButtonClick} className={styles.navIcon} src={Cv} alt='cv icon button link' />
        <h1>Resume</h1>
        <h4>Click the icon to download my resume</h4>
      </div>
    </>
  )
}


export default Resume
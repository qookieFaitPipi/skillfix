import React from "react";
import styles from './About.module.scss';

// checron2
import chevron2 from './../../../Assets/images/icons/chevron2.png';

const About = () => {
  return(
    <div className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutTitle}>
          Скилфикс – там, где учатся новому
        </div>
        <div className={styles.aboutArrows}>
          <img className={styles.aboutArrowsImage} src={chevron2} alt="" />
        </div>
        <div className={styles.aboutText} >
          На платформе собраны видео-курсы экспертов из разных сфер:
          <div className={styles.aboutSupText}>
            🌮как приготовить <span style={{color: '#FA5252'}}>перуанские закуски</span> для вечера в кругу друзей <br />
            💆‍♀️ какие есть техники <span style={{color: '#FA5252'}}>самомассажа</span> <br />
            💃раскрепоститесь на курсе по <span style={{color: '#FA5252'}}>highheels</span> <br />
            🏮создадите неповторимый <span style={{color: '#FA5252'}}>абажур</span> своими руками <br /> и многое другое...
          </div>
        </div>
        <div className={styles.aboutContinue} id='scrollCourses'>
          <p className={styles.aboutContinueInput} onClick={() => document.getElementById('scrollCourses').scrollIntoView({behavior: "smooth"})}>cмотреть</p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(About);
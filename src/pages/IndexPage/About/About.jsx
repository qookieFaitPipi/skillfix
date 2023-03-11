import React from "react";
import styles from './About.module.scss';

import arrows from './../../../assets/images/icons/arrows.png'
const About = () => {
  return(
    <div className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutArrows}>
          <img className={styles.aboutArrowsImage} src={arrows} alt="" />
        </div>
        <div className={styles.aboutTitle}>
          Скилфикс - там, где учатся новому
        </div>
        <div className={styles.aboutText}>
          На платформе собраны видео-курсы экспертов из разных сфер. Вы узнаете, как <br />
          приготовить изысканный итальянский ужин за 15 минут, в чем польза самомассажа,<br />
          как раскрепоститься с помощью бачаты, и почему вам все-таки стоит дать шанс йоге.
        </div>
        <div className={styles.aboutContinue}>
          <p className={styles.aboutContinueInput}>cмотреть</p>
        </div>
      </div>
    </div>
  );
}

export default About;
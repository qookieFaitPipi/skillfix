import React from "react";
import styles from './CourseAbout.module.scss';

// checron2
import chevron2 from './../../../Assets/images/icons/chevron2.png';

// redux
import { useSelector } from "react-redux";
const CourseAbout = () => {
  const {thisCourseConfig} = useSelector((state) => state.selectSlice);
  
  return( 
    <div className={styles.courseAbout}>
      <div className={styles.courseAboutContent}>
        <div className={styles.courseAboutMain}>
          <div className={styles.courseAboutTitle}>О курсе<div className={styles.courseAboutChevron}>&laquo;</div></div>
          <div className={styles.duration}>
            <div className={styles.durationText}><b>Длительность:</b> {thisCourseConfig.duration}</div>
          </div>
          <div className={styles.lessonsCount}>
            <div className={styles.lessonsCountText}><b>Количество уроков:</b> {thisCourseConfig.lessons.length}</div>
          </div>
          <div className={styles.authorInfo} id="scrollPrices">
            <div className={styles.authorName}>Об авторе:</div>
            <div className={styles.authorDescription}>{thisCourseConfig.authorinfo}</div>
          </div>
        </div>
        <div className={styles.courseAccess}>
          <div className={styles.courseAccessText}>Полный доступ к курсу</div>
          <div className={styles.aboutArrows}>
            <img className={styles.aboutArrowsImage} src={chevron2} alt="" />
          </div>
          <div className={styles.aboutContinue}>
            <div className={styles.aboutContinueInput}>получить</div>
          </div>      
        </div>
      </div>
    </div>
  );
}

export default React.memo(CourseAbout);
import React from "react";
import styles from './CourseList.module.scss';

import CourseNavbar from "./CourseNavbar/CourseNavbar";
import CourseContent from "./CourseContent/CourseContent";

// checron2
import chevron2 from './../../../assets/images/icons/chevron2.png';

const CourseList = (props) => {
  return(
    <div className={styles.courseSelect}>
      <div className={styles.courseSelectContent}>
        <CourseNavbar

        />
        <CourseContent 

        />
      </div>
      <div className={styles.courseAccess}>
        <div className={styles.courseAccessText}>Доступ ко всем курсам <br /> 190₽/мес</div>
        <div className={styles.aboutArrows}>
          <img className={styles.aboutArrowsImage} src={chevron2} alt="" />
        </div>
        <div className={styles.aboutContinue}>
          <p className={styles.aboutContinueInput}>получить</p>
        </div>      
      </div>
    </div>
  );
}

export default React.memo(CourseList);
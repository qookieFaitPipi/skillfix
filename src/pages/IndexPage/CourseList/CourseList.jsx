import React, {useState} from "react";
import styles from './CourseList.module.scss';

import CourseNavbar from "./CourseNavbar/CourseNavbar";
import CourseContent from "./CourseContent/CourseContent";
const CourseList = () => {

  const [courseSelect, setCourseSelect] = useState('select1');

  return(
    <div className={styles.courseSelect}>
      <div className={styles.courseSelectContent}>
        <CourseNavbar 
          courseSelect={courseSelect}
          setCourseSelect={setCourseSelect}
        />
        <CourseContent 
          courseSelect={courseSelect}
          setCourseSelect={setCourseSelect}
        />
      </div>
    </div>
  );
}

export default CourseList;
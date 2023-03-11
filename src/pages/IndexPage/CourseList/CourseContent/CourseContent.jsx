import React from "react";
import styles from './CourseContent.module.scss';

import CourseItem from "./CourseItem/CourseItem";
const CourseContent = (props) => {
  let courseList = [];
  if(props.courseSelect == 'select1') {
    courseList = ['1couse', '2course'];
  } else if(props.courseSelect == 'select2') {
    courseList = ['3couse']; 
  }

  return(
    <div className={styles.courseContent}>
      {courseList.map(course => 
        <CourseItem key={course} course={course} />
      )}
    </div>
  );
}

export default CourseContent;
import React from "react";
import styles from './CourseContent.module.scss';

import CourseItem from "./CourseItem/CourseItem";

// redux
import { useSelector } from "react-redux";
const CourseContent = (props) => {
  const {courseList} = useSelector((state) => state.courseSlice);
  const {courseType} = useSelector((state) => state.filterSlice);

  return(
    <div className={styles.courseContent}>
      {courseList.map(course => {
        if(courseType === course.category)
          return <CourseItem 
            key={course.id} 
            id={course.id} 
            preview={course.previewphoto} 
            name={course.name} 
          />;
      })}
    </div>
  );
}

export default React.memo(CourseContent);
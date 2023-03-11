import React from "react";
import styles from './CourseItem.module.scss';

const CourseItem = (props) => {
  return(
    <div className={styles.courseItem}>
      {props.course}
    </div>
  );
}

export default CourseItem;
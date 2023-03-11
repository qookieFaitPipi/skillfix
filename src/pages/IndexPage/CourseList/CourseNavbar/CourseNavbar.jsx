import React from "react";
import styles from './CourseNavbar.module.scss';

const CourseNavbar = (props) => {

  const select1 = () => {
    props.setCourseSelect('select1');
    console.log(props.courseSelect)
  }
  const select2 = () => {
    props.setCourseSelect('select2');
    console.log(props.courseSelect)

  }
  const select3 = () => {
    props.setCourseSelect('select3');
    console.log(props.courseSelect)

  }

  return(
    <div className={styles.courseNavbar}>
      <div className={styles.courseNavbarItem} onClick={select1}>Саморазвитие</div>
      <div className={styles.courseNavbarItem} onClick={select2}>Йога</div>
      <div className={styles.courseNavbarItem} onClick={select3}>Медитации</div>
    </div>
  );
}

export default CourseNavbar;
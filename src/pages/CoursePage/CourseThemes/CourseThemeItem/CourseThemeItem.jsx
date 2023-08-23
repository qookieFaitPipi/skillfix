import React from "react";
import styles from './CourseThemeItem.module.scss';

// redux
import { useDispatch } from 'react-redux';
import { selectVideo } from "../../../../Redux/slices/selectSlice";

const CourseThemeItem = (props) => {
  const dispatch = useDispatch()

  return(
    <div className={styles.courseThemeItem} onClick={() => dispatch(selectVideo({thisVideo: props.url}))}>
      <video className={styles.courseThemeItemVideo} src={props.url}></video>
      <div className={styles.courseThemeItemText}>{props.title}</div>
   </div>
  );
}

export default React.memo(CourseThemeItem);
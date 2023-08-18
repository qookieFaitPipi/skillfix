import React from "react";
import axios from "axios";
import styles from './CourseItem.module.scss';

// react-router-dom
import {Link} from "react-router-dom";

// redux 
import { useDispatch } from 'react-redux';
import { selectCourse } from '../../../../../redux/slices/selectSlice';

const CourseItem = (props) => {
  const dispatch = useDispatch()

  const selectThisCourse = async() => {
    try {
      const response = await axios('http://hosting2.alexavr.ru/get_course/' + props.id);
      dispatch(selectCourse({thisCourseConfig: response.data, thisVideo: response.data.preview}))
    } catch(err) {
      console.log(err);
    }
  }

  return(
    <Link 
      className={styles.courseItem}
      style={{backgroundImage: `url(${props.preview})`}} 
      to={'/course/' + props.id} 
      onClick={selectThisCourse}
    >
      <div className={styles.courseItemText}>{props.name}</div>
    </Link>
  );
}

export default React.memo(CourseItem);
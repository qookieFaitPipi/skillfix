import React from "react";
import styles from './CourseNavbar.module.scss';

// redux
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { setCourseType } from "../../../../redux/slices/filterSlice";
const CourseNavbar = () => {
  const dispatch = useDispatch()
  const {courseType} = useSelector((state) => state.filterSlice);

  return(
    <div className={styles.courseNavBar} >
      <div className={styles.courseActual}>
        <div className={courseType === 0 ? styles.courseNavbarItemActive :styles.courseNavbarItem} onClick={() => dispatch(setCourseType({courseType: 0}))}>Танцы</div>
        <div className={courseType === 1 ? styles.courseNavbarItemActive :styles.courseNavbarItem} onClick={() => dispatch(setCourseType({courseType: 1}))}>Духовность</div>
        <div className={courseType === 2 ? styles.courseNavbarItemActive :styles.courseNavbarItem} onClick={() => dispatch(setCourseType({courseType: 2}))}>Красота</div>
      </div>
      <div className={styles.courseComingSoon}>
        <div className={styles.courseComingSoonTitle}>Скоро!</div>
        <div className={styles.courseComingSoonItem} id='scrollPrices'>Фотография</div>
        <div className={styles.courseComingSoonTitle}>Скоро!</div>

        <div className={styles.courseComingSoonItem}>Творчество</div>
        <div className={styles.courseComingSoonTitle}>Скоро!</div>

        <div className={styles.courseComingSoonItem}>Кулинария</div>
        <div className={styles.courseComingSoonTitle}>Скоро!</div>

        <div className={styles.courseComingSoonItem}>Психология</div>
        <div className={styles.courseComingSoonTitle}>Скоро!</div>

        <div className={styles.courseComingSoonItem}>Спорт</div>
      </div>
    </div>
  );
}

export default React.memo(CourseNavbar);
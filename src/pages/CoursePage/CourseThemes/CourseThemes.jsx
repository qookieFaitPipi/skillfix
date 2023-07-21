import React, {useEffect, useState} from "react";
import styles from './CourseThemes.module.scss';

import CourseThemeItem from "./CourseThemeItem/CourseThemeItem";

// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// redux
import { useSelector } from "react-redux";

const CourseThemes = (props) => {
  const {thisCourseConfig} = useSelector((state) => state.selectSlice);
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return(
    <Carousel className={styles.courseThemes} responsive={responsive}>
      {thisCourseConfig.lessons.map(theme =>
        <CourseThemeItem
          key={theme.id} 
          title={theme.title} 
          url={theme.url} 
        />
      )}
    </Carousel>
  );
}

export default React.memo(CourseThemes);
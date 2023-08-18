import React from "react";
import styles from './CoursePreviewImage.module.scss';

// redux
import { useSelector } from "react-redux";

const CoursePreviewImage = () => {
  const {thisCourseConfig} = useSelector((state) => state.selectSlice);
  
  return(
    <div className={styles.coursePreviewImage} style={{backgroundImage: `url(${thisCourseConfig.expertphoto})`}}>
      <div className={styles.coursePreviewImageText}>{thisCourseConfig.name}</div>
      <div className={styles.courseAboutInfo} id="scrollPrices">
        <div className={styles.courseTextItem}>{thisCourseConfig.description}</div>
        <div className={styles.aboutContinue}>
          <p className={styles.aboutContinueInput}>смотреть</p>
        </div>  
      </div>
    </div>
  );
}

export default React.memo(CoursePreviewImage);
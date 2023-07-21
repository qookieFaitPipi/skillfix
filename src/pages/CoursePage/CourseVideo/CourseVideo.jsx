import React from "react";
import styles from './CourseVideo.module.scss';

// redux
import { useSelector } from "react-redux";

const CourseVideo = () => {
  const {thisVideo} = useSelector((state) => state.selectSlice);

  return(
    <div className={styles.fullPageVideo}>
      <div className={styles.fullPageVideoContent}>
        <video src={thisVideo} autoPlay="autoplay" preload='true' playsInline controls className={styles.video}></video>
      </div>
    </div>
  );
}

export default React.memo(CourseVideo);
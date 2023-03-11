import React from "react";
import styles from './FullPageVideo.module.scss';

// video
import bgVideo from './../../../assets/videos/spatk.mp4';

const FullPageVideo = () => {
  return(
    <div className={styles.fullPageVideo}>
      <div className={styles.fullPageVideoContent}>
        <video src={bgVideo} autoPlay loop muted className={styles.video}></video>
      </div>
    </div>
  );
}

export default FullPageVideo;
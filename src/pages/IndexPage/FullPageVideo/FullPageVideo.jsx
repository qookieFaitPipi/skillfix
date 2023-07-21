import React from "react";
import styles from './FullPageVideo.module.scss';

// video
import bgVideo from './../../../assets/videos/intro.mp4';

const FullPageVideo = () => {
  return(
    <div className={styles.fullPageVideo}>
      <div className={styles.fullPageVideoContent}>
        <video src={bgVideo} playsInline preload='true' autoPlay loop muted type="video/mp4" className={styles.video}>
        </video>
      </div>
    </div>
  );
}

export default React.memo(FullPageVideo);
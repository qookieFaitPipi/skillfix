import React from "react";
import styles from './CourseSub.module.scss';

const CourseSub = () => {
  return(
    <div className={styles.courseSub}>
      <div className={styles.courseSubTitleBlock}>
        <div className={styles.courseSubTitle}><b style={{fontSize: '22px'}}>Подписка Скилфикс</b> - это доступ к постоянно обновляющейся библиотеке курсов по развитию личности.</div> 
      </div>
    </div>
  );
}

export default React.memo(CourseSub);
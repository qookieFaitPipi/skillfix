import React from "react";
import styles from './AccordionInfo.module.scss';

const AccordionInfo = (props) => {
  return(
    <div className={styles.accordionInfo}>
      <div className={styles.accordionInfoContent}>
        {props.text}
      </div>
    </div>
  );
}

export default React.memo(AccordionInfo);
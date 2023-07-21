import React, {useState} from "react";
import styles from './Accordion.module.scss';

import AccordionInfo from "./AccordionInfo/AccordionInfo";

import chevron from './../../../../assets/images/icons/chevron.svg'
const Accordion = (props) => {
  const [show, setShow] = useState(false);

  return(
    <>
      <div className={styles.accordion} onClick={() => setShow(!show)}>
        <div className={styles.accordionTitle}>{props.title}</div>
        <img className={show ? styles.accordionImageActive : styles.accordionImage} src={chevron} />
      </div>
      {show && (<AccordionInfo text={props.text} />)}
    </>
  );
}

export default React.memo(Accordion);
import React from "react";
import styles from './Questions.module.scss';

import Accordion from "./Accordion/Accordion";
const Questions = () => {

  const accordionList = [
    {id: 1, title: 'What is MasterClass', text: 'text'},
    {id: 2, title: 'What is included in a MasterClass membership', text: 'text'},
    {id: 3, title: 'Where can i watch?', text: 'text'},
    {id: 4, title: 'Which classes are right for me?', text: 'text'},

  ]
  return(
    <div className={styles.questions}>
      <div className={styles.questionsContent}>
        <h4 className={styles.questionsTitle}>Частые вопросы</h4>
        {accordionList.map(accordion =>
          <Accordion
            key={accordion.id}
            title={accordion.title}
            text={accordion.text}
          />
        )}
      </div>
    </div>
  );
}

export default Questions;
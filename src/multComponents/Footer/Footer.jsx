import React from "react";
import styles from './Footer.module.scss';

// logo
import logo from './../../assets/images/logo/logo1.png'
const Footer = () => {
  return(
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.topFooter}>
          <div className={styles.topFooterTitleBlock}>
            <div className={styles.topFooterTitle}>Помогаем экспертам создавать!</div>
            <div className={styles.topFootetSupTitle}>Скилфикс помогает в создании <b>востребованных</b> онлайн-курсов</div>
          </div>
          <div className={styles.topFooterContactBlock}> 
            <div className={styles.topFooterContactText}>По вопросам сотрудничества обращайтесь на <br/> skillfix@gmail.com</div>
          </div>
        </div>
        <div className={styles.bottomFooter}>
          <div className={styles.rights}>Все права защищены</div>
          <div className={styles.shortInfo}>(все что тут обычно пишут)</div>
          <img className={styles.indexHeaderLogo} src={logo} alt="" />

        </div>
      </div>
    </div>
  );
}

export default Footer;
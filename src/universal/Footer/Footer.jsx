import React from "react";
import styles from './Footer.module.scss';

// logo
import logo from './../../assets/images/logo/logo.png';

const Footer = () => {
  return(
    <footer className={styles.footer} id='scrollFooter'>
      <div className={styles.footerContent}>
        <div className={styles.topFooter}>
          <div className={styles.topFooterTitleBlock}>
            <div className={styles.topFooterTitle}>Помогаем экспертам создавать!</div>
            <div className={styles.topFootetSupTitle}>Скилфикс помогает в создании <b>востребованных</b> онлайн-курсов</div>
          </div>
          <div className={styles.topFooterContactBlock}> 
            <div className={styles.topFooterContactText}>По вопросам сотрудничества обращайтесь на <br/>skillfix-platform@yandex.ru</div>
          </div>
        </div>
        <div className={styles.bottomFooter}>
          <div className={styles.rights}>Скилфикс 2023 Все права защищены</div>
          <div className={styles.shortInfo}>Пользовательское соглашение</div>
          <img className={styles.indexHeaderLogo} src={logo} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
import React from "react";
import styles from './IndexHeader.module.scss';

import {Link} from "react-router-dom";

// avatar
import userIcon from './../../../assets/images/icons/userIcon.svg';
// logo
import logo from './../../../assets/images/logo/logo1.png'
const IndexHeader = () => {
  return(
    <div className={styles.indexHeader}>
      <div className={styles.indexHeaderContent}>
        <div className={styles.indexHeaderLogoBlock}>
          <img className={styles.indexHeaderLogo} src={logo} alt="" />
        </div>
        <div className={styles.indexHeaderNavBlock}>
          <div className={styles.indexHeaderNavItem}>
            <Link className={styles.indexHeaderNavLink}>о нас</Link>
          </div>
          <div className={styles.indexHeaderNavItem}>
            <Link className={styles.indexHeaderNavLink}>курсы</Link>
          </div>
          <div className={styles.indexHeaderNavItem}>
            <Link className={styles.indexHeaderNavLink}>экспертам</Link>
          </div>
          <div className={styles.indexHeaderNavItem}>
            <Link className={styles.indexHeaderNavLink}>цены</Link>
          </div>
          <div className={styles.indexHeaderNavItem}>
            <Link className={styles.indexHeaderNavLink}>ЛК</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexHeader;
import React from 'react';
import styles from './NavIndex.module.scss'

// react-router-dom
import { Link } from 'react-router-dom';

const NavIndex = () => {
  return (
    <>
      <div className={styles.headerNavItem}>
        <Link className={styles.headerNavLink} onClick={() => window.scroll({top: 700, behavior: 'smooth'})}>о нас</Link>
      </div>
      <div className={styles.headerNavItem}>
        <Link className={styles.headerNavLink} onClick={() => document.getElementById('scrollCourses').scrollIntoView({behavior: "smooth"})}>курсы</Link>
      </div>
      <div className={styles.headerNavItem}>
        <Link className={styles.headerNavLink} onClick={() => document.getElementById('scrollFooter').scrollIntoView({behavior: "smooth"})}>экспертам</Link>
      </div>
    </>
  )
}

export default React.memo(NavIndex);
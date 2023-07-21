import React from 'react';
import styles from './NavCourse.module.scss';

// react-router-dom
import { Link } from 'react-router-dom';

const NavCourse = () => {
  return (
    <>
      <div className={styles.headerNavItem}>
        <Link className={styles.headerNavLink} to='/'>курсы</Link>
      </div>
      <div className={styles.headerNavItem}>
        <Link className={styles.headerNavLink} onClick={() => document.getElementById('scrollFooter').scrollIntoView({behavior: "smooth"})}>экспертам</Link>
      </div>
    </>
  )
}

export default NavCourse

import React, { useState } from "react";
import styles from './Header.module.scss';

// avatar
import avatar from './../../assets/images/icons/avatar1.png';
// logo
import logo from './../../assets/images/logo/logo.png'

// react-router-dom
import { Link } from "react-router-dom";

// components
import NavIndex from "./NavIndex/NavIndex";
import NavCourse from "./NavCourse/NavCourse";

// redux
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { setEntryModalState } from './../../redux/slices/modalSlice';
import { logout } from './../../redux/slices/userSlice';

const Header = () => {
  const {isSelected} = useSelector((state) => state.selectSlice);
  const {userLogin, isEntered} = useSelector((state) => state.userSlice);
  const dispatch = useDispatch()

  const [userPopupActive, setUserPopupActive] = useState(false);
  
  const userIconClick = () => {    
    if(isEntered === false) {
      dispatch(setEntryModalState({
        entryModalState: true,
      }))
    } else {
      setUserPopupActive(!userPopupActive);
    }
  }

  return(
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link className={styles.headerLogoBlock} to='/'>
          <img className={styles.headerLogo} src={logo} alt="" onClick={() => window.scroll({top: 0, behavior: 'smooth'})}/>
        </Link>
        <div className={styles.headerNavBlock}>
          {isSelected ? <NavCourse /> : <NavIndex />}
          <div className={styles.headerUserItem} onClick={userIconClick}>
            <img className={styles.headerAvatar} src={avatar} alt="" />
            <div className={userPopupActive ? styles.active : styles.headerUserPopup}>
              <div className={styles.userPopupContent}>
                <div className={styles.userPopupLogin}>{userLogin}</div>
                <div className={styles.aboutContinue}>
                  <div className={styles.aboutContinueInput} onClick={() => dispatch(logout())}>Выйти</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);
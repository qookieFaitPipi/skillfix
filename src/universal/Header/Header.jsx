import React, { useState } from "react";
import styles from './Header.module.scss';

// avatar
import avatar from './../../Assets/images/icons/avatar1.png';
// logo
import logo from './../../Assets/images/logo/logo.png'

// react-router-dom
import { Link } from "react-router-dom";

// components
import NavIndex from "./NavIndex/NavIndex";
import NavCourse from "./NavCourse/NavCourse";

// redux
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { setEntryModalState } from '../../Redux/slices/modalSlice';
import { logout } from '../../Redux/slices/userSlice';

// hooks
import { getCookie } from "../../Hooks/getCookie";

const Header = () => {
  const {isSelected} = useSelector((state) => state.selectSlice);
  const {userLogin, isEntered} = useSelector((state) => state.userSlice);
  const dispatch = useDispatch()

  const [userPopupActive, setUserPopupActive] = useState(false);
  
  const userIconClick = () => {    
    if(getCookie("token") === '-1' || getCookie("token") === undefined) {
      dispatch(setEntryModalState({
        entryModalState: true,
      }))
    } else {
      setUserPopupActive(!userPopupActive);
    }
  }

  const userLogoutHandler = () => {
    dispatch(logout());
    setUserPopupActive(false);
  }

  return(
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link className={styles.headerLogoBlock} to='/'>
          <img className={styles.headerLogo} src={logo} alt="" onClick={() => window.scroll({top: 0, behavior: 'smooth'})}/>
        </Link>
        <div className={styles.headerNavBlock}>
          {isSelected ? <NavCourse /> : <NavIndex />}
          
          <div className={styles.headerUserItem}>
            <img className={styles.headerAvatar} onClick={userIconClick} src={avatar} alt="userIcon" />
            <div className={userPopupActive ? styles.active : styles.headerUserPopup}>
              <div className={styles.userPopupContent}>
                <div className={styles.userPopupLogin}>{userLogin}</div>
                <div className={styles.aboutContinue}>
                  <div className={styles.aboutContinueInput} onClick={userLogoutHandler}>Выйти</div>
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
import React, { useState } from "react";
import axios from "axios";
import styles from './EntryModal.module.scss';

// cookies
import { useCookies } from 'react-cookie';


// redux
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { setEntryModalState, setRegisterModalState, setAlertModalState } from './../../../redux/slices/modalSlice';
import { login } from './../../../redux/slices/userSlice';

const EntryModal = () => {
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const {entryModalState} = useSelector((state) => state.modalSlice);
  const dispatch = useDispatch()

  const userEntry = async() => {
    const userData = {
      'login': userLogin,
      'password': userPassword
    }
    try {
      await axios.post('http://0.0.0.0:12345/login', userData)
      dispatch(login({
        userLogin: userLogin,
        userPassword: userPassword,
        isEntered: true,
      }))
      dispatch(setAlertModalState({alertModalState: true}));
      dispatch(setEntryModalState({entryModalState: false}));
    } catch(err) {
      console.log(err);
    }
  }
  
  console.log(document.cookie)

  const toRegisterModal = () => {
    dispatch(setEntryModalState({entryModalState: false}));
    dispatch(setRegisterModalState({registerModalState: true}));
  }

  return(
    <div className={entryModalState ? styles.active : styles.entryModal} onClick={() => dispatch(setEntryModalState({entryModalState: false}))}>
      <div className={styles.entryModalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.entryTitleBlock}>
          <h4 className={styles.entryTitle}>Вход</h4>
          <p className={styles.entryModalClose} onClick={() => dispatch(setEntryModalState({entryModalState: false}))}>&times;</p>
        </div>
        <label className={styles.entryEmailLabel}>Почта</label>
        <input className={styles.entryEmailInput} value={userLogin} onChange={e => setUserLogin(e.target.value)} type="email" />

        <label className={styles.entryPasswordLabel}>Пароль</label>
        <input className={styles.enrtyPasswordInut} value={userPassword} onChange={e => setUserPassword(e.target.value)} type="password" />
        <p className={styles.entryContinueInput} onClick={userEntry}>Войти</p>

        <div className={styles.entryRedirectBlock}>
          <label className={styles.entryBackLabel}>Нужна учётная запись?<span onClick={toRegisterModal} className={styles.entryQue}>Зарегистрироваться</span></label>
          <span className={styles.entryForgotLabel}>Забыли пароль?</span>
        </div>
      </div>
    </div>   
  );                                                    
}

export default React.memo(EntryModal); 
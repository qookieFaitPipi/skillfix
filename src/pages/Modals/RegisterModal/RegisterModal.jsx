import React, { useState } from "react";
import axios from "axios";
import styles from './RegisterModal.module.scss';

// redux
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { setEntryModalState, setRegisterModalState } from './../../../redux/slices/modalSlice';

const RegisterModal = () => {
  const [userName, setUserName] = useState('');
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [reUserPassword, setUserRepassword] = useState('');
  
  const {registerModalState} = useSelector((state) => state.modalSlice);
  const dispatch = useDispatch()

  const userRegister = async() => {
    const userData = {
      'login': userLogin,
      'password': userPassword
    }
    try {
      await axios.post('http://0.0.0.0:12345/register', userData);
    } catch(err) {
      console.log(err);
    }
  }

  const toEntryModal = () => {
    dispatch(setEntryModalState({entryModalState: true}))
    dispatch(setRegisterModalState({registerModalState: false}))
  }

  return(
    <div className={registerModalState ? styles.active : styles.registerModal} onClick={() => dispatch(setRegisterModalState({entryModalState: false}))}>
      <div className={styles.registerModalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.registerTitleBlock}>
          <h4 className={styles.registrationTitle}>Создать аккаунт</h4>
          <p className={styles.registrationModalClose} onClick={() => dispatch(setRegisterModalState({entryModalState: false}))}>&times;</p>
        </div>

        <label className={styles.regPassLabel}>Ваше имя</label>
        <input className={styles.regPassInput} value={userName} onChange={e => setUserName(e.target.value)} type="text" />

        <label className={styles.regPassLabel}>Почта</label>
        <input className={styles.regPassInput} value={userLogin} onChange={e => setUserLogin(e.target.value)} type="text" />

        <label className={styles.regPassLabel}>Пароль</label>
        <input className={styles.regPassInput} value={userPassword} onChange={e => setUserPassword(e.target.value)} type="text" />

        <label className={styles.regPassLabel}>Повторить пароль</label>
        <input className={styles.regPassInput} value={reUserPassword} onChange={e => setUserRepassword(e.target.value)} type="text" />

        <div className={styles.regContinueInput} onClick={userRegister}>Зарегистрироваться</div>
        <label className={styles.regBackLabel}><span onClick={toEntryModal} to="/entry" className={styles.regQue}>Уже зарегистрированы?</span></label>
      </div>
    </div>
  );
}

export default React.memo(RegisterModal);
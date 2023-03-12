import React, {useState} from "react";
import styles from './EntryModal.module.scss';

import {Link} from "react-router-dom";

//Context
import {useContext} from 'react';
import {Context} from "../../../../Context";

const EntryModal = (props) => {
  const {cookies, setCookies} = useContext(Context);
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const userEntry = () => {
    const userData = {
      'login': login,
      'password': password
    }
    fetch('http://192.168.1.41:8080/auth', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if(data.is_auth) {
        setCookies('userToken', data.token, { path: '/' });
      } else {
        alert("Вход неправильный");
      }
    })
  }
  const toRegisterModal = () => {
    props.setEntryModalActive(false);
    props.setRegisterModalActive(true);
  }

  return(
    <div className={props.entryModalActive ? styles.active : styles.entryModal}>
      <div className={styles.entryModalContent}>
        <div className={styles.entryTitleBlock}>
          <h4 className={styles.entryTitle}>Вход</h4>
          <p className={styles.entryModalClose} onClick={() => props.setEntryModalActive(false)}>&times;</p>
        </div>
        <label className={styles.entryEmailLabel}>Email</label>
        <input className={styles.entryEmailInput} onChange={e => setLogin(e.target.value)} type="email" />

        <label className={styles.entryPasswordLabel}>Пароль</label>
        <input className={styles.enrtyPasswordInut} onChange={e => setPassword(e.target.value)} type="password" />

        <p className={styles.entryContinueInput} onClick={userEntry}>Войти</p>
        <label className={styles.entryBackLabel}>Нужна учётная запись?<span onClick={toRegisterModal} className={styles.entryQue}>Зарегистрироваться</span></label>
      </div>
    </div>   
  );                                                    
}

export default EntryModal; 
import React, {useState} from "react";
import styles from './RegisterModal.module.scss';

import {Link} from "react-router-dom";

const RegisterModal = (props) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRepassword] = useState();

  const userReg = () => {
    const userData = {
      'login': email,
      'password': password
    }
    fetch('http://192.168.1.41:8080/register', {
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
        console.log(data)
        if(data.is_register) {
            alert("Вам пришло письмо на почту");
        } else {
            alert("Регстрация неправильный");
        }
    })
  }

  const toEntryModal = () => {
    props.setEntryModalActive(true);
    props.setRegisterModalActive(false);
  }


  return(
    <div className={props.registerModalActive ? styles.active : styles.registerModal}>
      <div className={styles.registerModalContent}>
        <div className={styles.registerTitleBlock}>
          <h4 className={styles.registrationTitle}>Регистрация</h4>
          <p className={styles.registrationModalClose} onClick={() => props.setRegisterModalActive(false)}>&times;</p>
        </div>

        <label className={styles.regEmailLabel}>Email</label>
        <input className={styles.regEmailInput} onChange={e => setEmail(e.target.value)} type="text" />

        <label className={styles.regPassLabel}>Пароль</label>
        <input className={styles.regPassInput} onChange={e => setPassword(e.target.value)} type="text" />

        <label className={styles.regRePassLabel}>Подтвердите пароль</label>
        <input className={styles.regRePassInput} onChange={e => setRepassword(e.target.value)} type="text" />

        <Link className={styles.regContinueInput} to='' onClick={userReg}>Зарегистрироваться</Link>
        <label className={styles.regBackLabel}><span onClick={toEntryModal} to="/entry" className={styles.regQue}>Уже зарегистрированы?</span></label>
      </div>
    </div>
  );
}

export default RegisterModal;
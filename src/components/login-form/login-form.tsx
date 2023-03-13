import React from 'react';
import styles from './LoginForm.module.css';
import passwordIconShow from '../../assets/form-images/show-password.svg';
import passwordIconHide from '../../assets/form-images/hide-password.svg';
import closeIcon from '../../assets/form-images/close-icon.svg';
import colorfulLogo from '../../assets/img/colorful-logo.svg';
import textLogo from '../../assets/img/logo-text.svg';
import { useState } from 'react';

function LoginForm() {
  const [ passwordVisibility, setPasswordVisibility ] = useState<boolean>(true);

  const hidePassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <div className={styles.LoginForm}>
      <div className={styles.backgroundLogo}>
        <img src={colorfulLogo} alt="close" className={styles.colorfulLogo}/>
        <img src={textLogo} alt="close" className={styles.textLogo}/>
      </div>
      <div className={styles.formWrapper}>
        <div className={styles.logoWrapper}>
        </div>
        <div className={styles.formArea}>
          <h1 className={styles.header}>Вход</h1>
          <form className={styles.form}>
            <div className={styles.textInputWrapper}>
              <label form="inputName" className={styles.inputLabel}>
                Электронная почта
              </label>
              <input type="email" id="inputName" className={styles.textInput} />
            </div>
            <div className={styles.textInputWrapper}>
              <label htmlFor="inputPassword" className={styles.inputLabel}>
                Пароль
              </label>
              <div className={styles.passwordWrapper}>
                <input
                  type={passwordVisibility ? 'password' : 'text'}
                  id="inputPassword"
                  className={styles.passwordInput}
                />
                <img
                  alt="hidePassword"
                  src={
                    passwordVisibility ? passwordIconShow : passwordIconHide
                  }
                  className={styles.passwordIcon}
                  onClick={hidePassword}
                />
              </div>
            </div>
            <button className={styles.button}>Зарегистрироваться</button>
          </form>
        </div>
        <img src={closeIcon} alt="close" className={styles.closeIcon}/>
      </div>
    </div>
  );
}

export default LoginForm;

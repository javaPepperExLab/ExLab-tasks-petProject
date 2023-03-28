/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './login-form.module.css';
import passwordIconShow from '../../assets/form-images/show-password.svg';
import passwordIconHide from '../../assets/form-images/hide-password.svg';
import logoMedium from '../../assets/img/logo-medium.svg';
import { FormEvent, useState } from 'react';
import RecoveryForm from '../recovery-form/recovery-form';
import { LoginFormData } from '../../types/login-form-data';
import { useAppDispatch } from '../../hooks';
import { postLoginDataAction } from '../../store/api-action';

function LoginForm() {

  const [ passwordVisibility, setPasswordVisibility ] = useState<boolean>(true);
  const [ isClicked, setClicked ] = useState<boolean>(false);
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ isClosed, setClosed ] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const hideShowPasswordHandler = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const onClickHandler = () => {
    setClicked(!isClicked);
  };

  const onSubmitHandler = (evt: FormEvent) => {
    evt.preventDefault();
    const userData: LoginFormData = {
      email: email,
      password: password,
    };
    dispatch(postLoginDataAction(userData));
  };

  return (
    !isClosed ?
      (!isClicked ?
        <div className={styles.loginForm}>
          <div className={styles.formWrapper}>
            <div className={styles.backgroundLogo}>
              <img src={logoMedium} alt="logo" className={styles.logoMedium} />
            </div>
            <div className={styles.logoWrapper}></div>
            <div className={styles.formArea}>
              <h1 className={styles.header}>Вход</h1>
              <form className={styles.form} onSubmit={onSubmitHandler}>
                <div className={styles.textInputWrapper}>
                  <label form="inputName" className={styles.inputLabel}>
                Электронная почта
                  </label>
                  <input
                    type="email"
                    id="inputName"
                    className={styles.textInput}
                    onChange={(evt) => {
                      const {value} = evt.currentTarget;
                      setEmail(value);
                    }}
                  />
                </div>
                <div className={styles.textInputWrapper}>
                  <label htmlFor="inputPassword" className={styles.inputLabel} >
                Пароль
                    <a
                      className={styles.forgotLink}
                      href='#'
                      onClick={onClickHandler}
                    >
                    Забыли пароль?
                    </a>
                  </label>
                  <div className={styles.passwordWrapper}>
                    <input
                      type={passwordVisibility ? 'password' : 'text'}
                      id="inputPassword"
                      className={styles.passwordInput}
                      onChange={(evt) => {
                        const {value} = evt.currentTarget;
                        setPassword(value);
                      }}
                    />
                    <img
                      alt="hidePassword"
                      src={passwordVisibility ? passwordIconShow : passwordIconHide}
                      className={styles.passwordIcon}
                      onClick={hideShowPasswordHandler}
                    />
                  </div>
                  <p className={styles.passwordNotice}>
                Не менее 8 символов и должен содержать одну заглавную букву
                  </p>
                </div>
                <button className={styles.button}>Войти</button>
              </form>
            </div>
            <button
              className={styles.closeIcon}
              onClick={() => {
                setClosed(!isClosed);
              }}
            >
            </button>
          </div>
        </div> :
        <RecoveryForm />
      ) :
      null
  );
}

export default LoginForm;

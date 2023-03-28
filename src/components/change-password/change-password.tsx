/* eslint-disable no-nested-ternary */
import styles from './change-password.module.css';
import passwordIconShow from '../../assets/form-images/show-password.svg';
import passwordIconHide from '../../assets/form-images/hide-password.svg';
import { FormEvent, useState } from 'react';
import { ChangePasswordData } from '../../types/change-pass-data';
import { postChangePasswordAction } from '../../store/api-action';
import { useAppDispatch } from '../../hooks';
import ChangePasswordSuccess from './change-pass-success';
import ChangePasswordError from './change-pass-error';

function ChangePassword() {

  const [ passwordVisability, setPasswordVisability ] = useState<boolean>(false);
  const [ pwdVisability, setPwdVisability ] = useState<boolean>(false);
  const [ passwordValue, setPassword ] = useState<string>('');
  const [ confirmedPwdValue, setConfirmedPassword ] = useState<string>('');
  const [ isRequestAnswer, setRequestAnswer ] = useState<boolean>(false);
  const [ isClosed, setClosed ] = useState<boolean>(false);
  const [ isErrored, setError ] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const checkPasswordHandler = () => {
    setPasswordVisability(!passwordVisability);
  };

  const checkConfirmPasswordHandler = () => {
    setPwdVisability(!pwdVisability);
  };

  const onSubmitHandler = (evt: FormEvent) => {
    evt.preventDefault();
    const password: ChangePasswordData = {
      password: passwordValue,
    };
    if(passwordValue === confirmedPwdValue) {
      dispatch(postChangePasswordAction(password)).then((result) => {
        if(result.type !== 'changePass/rejected') {
          setRequestAnswer(!isRequestAnswer);
        }
      });
    }
  };

  return (
    isRequestAnswer ?
      <ChangePasswordSuccess /> :
      (
        isErrored ?
          <ChangePasswordError /> :
          (
            !isClosed ?
              <div className={styles.formBackground}>
                <div className={styles.formWrapper}>
                  <form action="#" className={styles.form} onSubmit={onSubmitHandler}>
                    <header className={styles.header}>Смeна пароля</header>
                    <div className={styles.formItemWrapper}>
                      <label className={styles.formLabel} htmlFor="inputFirst">
              Новый пароль
                      </label>
                      <div className={styles.inputWrapper}>
                        <input
                          type={passwordVisability ? 'text' : 'password'}
                          id="inputFirst"
                          className={styles.formInput}
                          onChange={(evt) => {
                            const { value } = evt.currentTarget;
                            if(value) {
                              setPassword(value);
                            }
                          }}
                        />
                        <img
                          alt="hidePassword"
                          src={passwordVisability ? passwordIconHide : passwordIconShow}
                          onClick={checkPasswordHandler}
                        />
                      </div>
                      <p className={styles.inputNotification}>
                      Не менее 8 символов и должен содержать одну заглавную букву
                      </p>
                    </div>
                    <div className={styles.formItemWrapper}>
                      <label className="form-label" htmlFor="inputSecond">
              Повторите пароль
                      </label>
                      <div className={styles.inputWrapper}>
                        <input
                          type={pwdVisability ? 'text' : 'password'}
                          id="inputSecond"
                          className={styles.formInput}
                          onChange={(evt) => {
                            const { value } = evt.currentTarget;
                            setConfirmedPassword(value);
                          }}
                          onMouseDown={() => {
                            if(confirmedPwdValue !== passwordValue) {
                              setError(!isErrored);
                            } else if(!passwordValue) {
                              setError(!isErrored);
                            }
                          }}
                        />
                        <img
                          alt="hidePassword"
                          src={pwdVisability ? passwordIconHide : passwordIconShow}
                          onClick={checkConfirmPasswordHandler}
                        />
                      </div>
                      <p className={styles.inputNotification}>
                      Не менее 8 символов и должен содержать одну заглавную букву
                      </p>
                    </div>
                    <button className={styles.formButton} type="submit">
            Продолжить
                    </button>
                  </form>
                  <button
                    className={styles.close}
                    onClick={() => {
                      setClosed(!isClosed);
                    }}
                  >
                  </button>
                </div>
              </div> :
              null
          )
      )
  );
}

export default ChangePassword;

import React, { FormEvent } from 'react';
import passwordIconShow from '../../../assets/form-images/show-password.svg';
import passwordIconHide from '../../../assets/form-images/hide-password.svg';
import styles from './form-for-fill.module.css';
import { useState } from 'react';
import { PasswordVisability } from '../../../const';
import { RegistrationFormData } from '../../../types/registration-form';
import { useAppDispatch } from '../../../hooks';
import { postRegistrationData } from '../../../store/api-action';
import { setRegistrationStatus } from '../../../store/actions';

function FormForFill() {

  const [mainPasswordVisibility, setMainPasswordVisibility] = useState<boolean>(true);
  const [additionalPasswordVisibility, setAdditionalPasswordVisibility] = useState<boolean>(true);
  const [ nameValue, setNameValue ] = useState<string>('');
  const [ passwordValue, setPasswordValue ] = useState<string>('');

  const dispatch = useAppDispatch();

  const setPasswordVisability = (param: string) => {
    param === PasswordVisability.first ?
      setMainPasswordVisibility(!mainPasswordVisibility) :
      setAdditionalPasswordVisibility(!additionalPasswordVisibility);
  };

  const onSubmitHandle = (evt: FormEvent) => {
    evt.preventDefault();
    const formData: RegistrationFormData = {
      name: nameValue,
      password: passwordValue,
    };
    dispatch(postRegistrationData(formData));
    dispatch(setRegistrationStatus(true));
  };

  return(
    <>
      <h1 className={styles.header}>Регистрация</h1>
      <form className={styles.form} onSubmit={onSubmitHandle}>
        <div className={styles.textInputWrapper}>
          <label form="inputName" className={styles.inputLabel}>
                Имя
          </label>
          <input type="text"
            id="inputName"
            className={styles.textInput}
            onChange={(evt) => {
              const { value } = evt.currentTarget;
              setNameValue(value);
            }}
          />
        </div>
        <div className={styles.textInputWrapper}>
          <label htmlFor="inputPassword" className={styles.inputLabel}>
                Пароль
          </label>
          <div className={styles.passwordWrapper}>
            <input
              type={mainPasswordVisibility ? 'password' : 'text'}
              id="inputPassword"
              className={styles.passwordInput}
              onChange={(evt) => {
                const { value } = evt.currentTarget;
                setPasswordValue(value);
              }}
            />
            <img
              alt="hidePassword"
              src={mainPasswordVisibility ? passwordIconShow : passwordIconHide}
              className={styles.passwordIcon}
              onClick={(e) => setPasswordVisability(PasswordVisability.first)}
            />
          </div>
        </div>
        <div className={styles.textInputWrapper}>
          <label htmlFor="repeatInputPassword" className={styles.inputLabel}>
                Повторите пароль
          </label>
          <div className={styles.passwordWrapper}>
            <input
              type={ additionalPasswordVisibility ? 'password' : 'text'}
              id="repeatInputPassword"
              className={styles.passwordInput}
            />
            <img
              alt="hidePassword"
              src={ additionalPasswordVisibility ? passwordIconShow : passwordIconHide}
              className={styles.passwordIcon}
              onClick={(e) => setPasswordVisability(PasswordVisability.second)}
            />
          </div>
        </div>
        <div className={styles.checkboxInputWrapper}>
          <input type="checkbox" className={styles.checkboxInput} />
          <label className={styles.inputLabel}>
                Я даю согласие на обработку персональных данных
          </label>
        </div>

        <button className={styles.button}>Зарегистрироваться</button>
      </form>
    </>
  );
}

export default FormForFill;

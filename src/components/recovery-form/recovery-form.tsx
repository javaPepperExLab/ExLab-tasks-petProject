/* eslint-disable no-nested-ternary */
import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { postRecoveryFormDataAction } from '../../store/api-action';
import { RecoveryFormData } from '../../types/recovery-form-data';
import RecoveryFormSuccess from './recovery-form-success';
import styles from './recovery-form.module.css';

function RecoveryForm() {

  const [ email, setEmail ] = useState<string>('');
  const [ isClosed, setClosed ] = useState<boolean>(false);
  const [ isRequestAnswer, setRequestAnswer ] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const recoveryDataHandle = (evt: FormEvent) => {
    evt.preventDefault();
    const recoveryFormData: RecoveryFormData = {
      email: email,
    };
    dispatch(postRecoveryFormDataAction(recoveryFormData)).then((result) => {
      if(result.type !== '/recovery/rejected') {
        setRequestAnswer(!isRequestAnswer);
      }
    });
  };

  return (
    isRequestAnswer ?
      <RecoveryFormSuccess /> :
      !isClosed ?
        <div className={styles.formBackground}>
          <div className={styles.formWrapper}>
            <form action="#" className={styles.form} onSubmit={recoveryDataHandle}>
              <header className={styles.header}>Восстановить доступ</header>
              <div>
                <p className={styles.inputNotification}>
              Для восстановления пароля, пожалуйста, введите адрес электронной
              почты
                </p>
              </div>
              <div className={styles.formItemWrapper}>
                <label className={styles.formLabel} htmlFor="inputFirst">
              Электронная почта
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type="email"
                    id="inputFirst"
                    className={styles.formInput}
                    onChange={(evt) => {
                      evt.preventDefault();
                      const { value } = evt.currentTarget;
                      setEmail(value);
                    }}
                  />
                </div>
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
  );
}

export default RecoveryForm;

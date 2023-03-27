import styles from '../change-password/change-pass-error.module.css';
import passwordIconShow from '../../assets/form-images/show-password.svg';
import closeIcon from '../../assets/form-images/close-icon.svg';

function ChangePasswordError() {
  return(
    <div className={styles.formBackground}>
      <div className={styles.formWrapper}>
        <form action="#" className={styles.form}>
          <header className={styles.header}>Смeна пароля</header>
          <div className={styles.formItemWrapper}>
            <label className={styles.formLabel} htmlFor="inputFirst">
      Новый пароль
            </label>
            <div className={styles.inputWrapper}>
              <input
                type={'password'}
                id="inputFirst"
                className={styles.formInput}
              />
              <img
                alt="hidePassword"
                src={passwordIconShow}
              />
            </div>
            <p className={styles.inputNotification}>Введите пароль</p>
          </div>
          <div className={styles.formItemWrapper}>
            <label className="form-label" htmlFor="inputSecond">
      Повторите пароль
            </label>
            <div className={styles.inputWrapper}>
              <input
                type={'password'}
                id="inputSecond"
                className={styles.formInput}
              />
              <img
                alt="hidePassword"
                src={passwordIconShow}
              />
            </div>
            <p className={styles.inputNotification}>Пароль не совпадает</p>
          </div>
          <button className={styles.formButton} type="submit">
    Продолжить
          </button>
        </form>
        <img alt="closeButton"
          src={closeIcon}
          className={styles.close}
        />
      </div>
    </div>
  );
}

export default ChangePasswordError;

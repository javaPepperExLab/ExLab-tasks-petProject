import { useState } from 'react';
import styles from '../../components/recovery-form/recovery-form-success.module.css';

function RecoveryFormSuccess() {

  const [ isClosed, setClosed ] = useState<boolean>(false);

  return (
    !isClosed ?
      <div className={styles.formBackground}>
        <div className={styles.formWrapper}>
          <div className={styles.illustrator}></div>
          <p className={styles.header}>Восстановить доступ</p>
          <p className={styles.textContent}>
            Письмо с ссылкой на восстановление пароля отправлено на Вашу почту
          </p>
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

export default RecoveryFormSuccess;

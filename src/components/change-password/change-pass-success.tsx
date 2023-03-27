import styles from './change-pass-success.module.css';
import closeIcon from '../../assets/form-images/close-icon.svg';
import { useState } from 'react';

function ChangePasswordSuccess() {

  const [ isClosed, setClosed ] = useState<boolean>(false);

  return (
    !isClosed ?
      <div className={styles.layoutBackground}>
        <div className={styles.wrapper}>
          <div className={styles.illustrator}></div>
          <p className={styles.header}>Поздравляю!</p>
          <p className={styles.textContent}>Новый пароль успешно сохранен</p>
          <img alt="closeButton"
            src={closeIcon}
            className={styles.close}
            onClick={() => {
              setClosed(!isClosed);
            }}
          />
        </div>
      </div> :
      null
  );
}

export default ChangePasswordSuccess;

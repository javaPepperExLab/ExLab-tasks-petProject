import React from 'react';
import styles from './RegistrationForm.module.css';
import logoSvg from '../../assets/img/logo.svg';
import FormForFill from '../../components/registration-form/form-for-fill/form-for-fill';
import SuccessfulRegistration from '../../components/registration-form/successfull-registration/successfull-registration';
import { useState } from 'react';

function RegistrationForm(props) {
  const [registrationStatus, setRegistrationStatus] = useState(false);

  const changeRegistrationStatus = (e) => {
    e.preventDefault();
    setRegistrationStatus(true);
  };
  return (
    <div className={styles.RegistrationForm}>
      <div className={styles.formWrapper}>
        <div className={styles.logoWrapper}>
          <img alt="logo" src={logoSvg} className={styles.logo} />
        </div>
        <div className={styles.formArea}>
          {registrationStatus ? <SuccessfulRegistration /> : <FormForFill changeRegistrationStatus={changeRegistrationStatus}/>}
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;

import styles from './registration-form.module.css';
import logoSvg from '../../assets/img/logo.svg';
import FormForFill from '../../components/registration-form/form-for-fill/form-for-fill';
import SuccessfulRegistration from '../../components/registration-form/successfull-registration/successfull-registration';
import { useAppSelector } from '../../hooks';

function RegistrationForm() {

  const registrationStatus = useAppSelector((state) => state.registrationStatus);

  return (
    <div className={styles.RegistrationForm}>
      <div className={styles.formWrapper}>
        <div className={styles.logoWrapper}>
          <img alt="logo" src={logoSvg} className={styles.logo} />
        </div>
        <div className={styles.formArea}>
          {registrationStatus ?
            <SuccessfulRegistration /> :
            <FormForFill />}
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;


import { FormEvent, useState } from 'react';
import { rolesValues } from '../../const';
import { useAppDispatch } from '../../hooks';
import { postUserDataAction } from '../../store/api-action';
import { EmailData } from '../../types/invite-form-data';
import styles from './invite-form.module.css';

function InviteForm() {
  const [ email, setEmail ] = useState<string>('');
  const [ roles, setRoles ] = useState<string>('');

  const dispatch = useAppDispatch();

  const postUserDataHandle = (evt: FormEvent) => {
    evt.preventDefault();
    const emailData: EmailData = {
      emailValues: email,
      rolesValues: roles,
    };
    dispatch(postUserDataAction(emailData));
  };

  return (
    <div className={styles.wrapper} >
      <form className={styles.inviteForm}
        action='#'
        method='post'
        onSubmit={postUserDataHandle}
      >
        <header className={styles.Header}>
          Пригласить участников в рабочее пространство
        </header>

        <div className={styles.inputWrapper}>
          <h4 className={styles.label}>
            Введите адрес(а) электронной почты:
          </h4>
          <input type="text"
            className={styles.input}
            onChange={
              (evt) => {
                const { value } = evt.currentTarget;
                setEmail(value);
              }
            }
          >
          </input>
        </div>
        <div className={styles.rolesWrapper}>
          <h4 className={styles.label}>Роль пользователя</h4>
          <select id="rolesSelector"
            className={styles.rolesSelector}
          >
            {rolesValues.map((role) =>
              (
                <option key={role}
                  onChange={(evt) => {
                    const { value } = evt.currentTarget;
                    setRoles(value);
                  }}
                >
                  {role}
                </option>))}
          </select>
        </div>
        <button className={styles.sentButton}>Отправить
        </button>
        <button className={styles.closeButton}>
        </button>
      </form>
    </div>
  );
}

export default InviteForm;

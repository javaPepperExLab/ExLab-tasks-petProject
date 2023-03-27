import { createAction } from '@reduxjs/toolkit';
import { ChangePasswordData } from '../types/change-pass-data';
import { EmailData } from '../types/invite-form-data';
import { LoginFormData } from '../types/login-form-data';
import { RecoveryFormData } from '../types/recovery-form-data';
import { RegistrationFormData } from '../types/registration-form-data';

export const setUserData = createAction('setUserData',
  (userData: EmailData) => ({payload: userData})
);
export const setDataError = createAction('setDataError',
  (isError: boolean) => ({payload: isError})
);
export const setRecoveryData = createAction('setRecoveryData',
  (value: RecoveryFormData) => ({payload: value})
);
export const setRegistrationStatus = createAction('setRegistrationStatus',
  (isRegistered: boolean) => ({payload: isRegistered})
);
export const setRegistrationData = createAction('setRegistrationData',
  (value: RegistrationFormData) => ({payload: value})
);
export const setLoginData = createAction('setLoginData',
  (userData: LoginFormData) => ({payload: userData})
);
export const changePassword = createAction('changePassword',
  (value: ChangePasswordData) => ({payload: value})
);

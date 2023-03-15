import { createAction } from '@reduxjs/toolkit';
import { EmailData } from '../types/invite-form';
import { RecoveryFormData } from '../types/recovery-form';
import { RegistrationFormData } from '../types/registration-form';

export const setUserData = createAction('setUserData',
  (userData: EmailData) => ({payload: userData})
);
export const setDataError = createAction('setDataError',
  (isError: boolean) => ({payload: isError})
);
export const setRecoveryData = createAction('setRecoveryAction',
  (value: RecoveryFormData) => ({payload: value})
);
export const setRegistrationStatus = createAction('setRegistrationStatus',
  (isRegistered: boolean) => ({payload: isRegistered})
);
export const setRegistrationData = createAction('setRegistrationData',
  (value: RegistrationFormData) => ({payload: value})
);

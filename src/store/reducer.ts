import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { EmailData } from '../types/invite-form';
import { RecoveryFormData } from '../types/recovery-form';
import { RegistrationFormData } from '../types/registration-form';
import { setDataError, setRecoveryData, setRegistrationData, setRegistrationStatus, setUserData } from './actions';

type initialStateType = {
  emailData: EmailData;
  isError: boolean;
  recoveryEmail: RecoveryFormData;
  registrationStatus: boolean;
  registrationFormData: RegistrationFormData;
}

const initialState: initialStateType = {
  emailData: {
    emailValues: '',
    rolesValues: '',
  },
  isError: false,
  recoveryEmail: {
    email: '',
  },
  registrationFormData: {
    name: '',
    password: ''
  },
  registrationStatus: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUserData, (state, action: PayloadAction<EmailData>) => {
      state.emailData = action.payload;
    })
    .addCase(setDataError, (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    })
    .addCase(setRecoveryData, (state, action: PayloadAction<RecoveryFormData>) => {
      state.recoveryEmail = action.payload;
    })
    .addCase(setRegistrationStatus, (state, action: PayloadAction<boolean>) => {
      state.registrationStatus = action.payload;
    })
    .addCase(setRegistrationData, (state, action: PayloadAction<RegistrationFormData>) => {
      state.registrationFormData = action.payload;
    });
});


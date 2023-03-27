import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { ChangePasswordData } from '../types/change-pass-data';
import { EmailData } from '../types/invite-form-data';
import { LoginFormData } from '../types/login-form-data';
import { RecoveryFormData } from '../types/recovery-form-data';
import { RegistrationFormData } from '../types/registration-form-data';
import { changePassword, setDataError, setLoginData, setRecoveryData, setRegistrationData, setRegistrationStatus, setUserData } from './actions';

type initialStateType = {
  emailData: EmailData;
  isError: boolean;
  recoveryEmail: RecoveryFormData;
  registrationStatus: boolean;
  registrationFormData: RegistrationFormData;
  loginFormData: LoginFormData;
  changePasswordData: ChangePasswordData;
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
  loginFormData: {
    email: '',
    password: ''
  },
  changePasswordData: {
    password: ''
  },
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
    })
    .addCase(setLoginData, (state, action: PayloadAction<LoginFormData>) => {
      state.loginFormData = action.payload;
    })
    .addCase(changePassword, (state, action: PayloadAction<ChangePasswordData>) => {
      state.changePasswordData = action.payload;
    });
});


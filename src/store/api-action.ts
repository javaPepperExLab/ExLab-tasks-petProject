import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '.';
import { ChangePasswordData } from '../types/change-pass-data';
import { EmailData } from '../types/invite-form-data';
import { LoginFormData } from '../types/login-form-data';
import { RecoveryFormData } from '../types/recovery-form-data';
import { RegistrationFormData } from '../types/registration-form-data';
import { changePassword, setDataError, setLoginData, setRecoveryData, setRegistrationData, setUserData } from './actions';

export const postUserDataAction = createAsyncThunk<void, EmailData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postUserDataAction',
  async({emailValues, rolesValues}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<EmailData>('/invite', {emailValues, rolesValues});
      dispatch(setUserData(data));
    } catch{
      dispatch(setDataError(true));
    }
  }
);

export const postRecoveryFormDataAction = createAsyncThunk<void, RecoveryFormData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postRecoveryFormData',
  async({email}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<RecoveryFormData>('/recovery', {email});
      dispatch(setRecoveryData(data));
    } catch {
      dispatch(setDataError(true));
    }
  }
);

export const postRegistrationDataAction = createAsyncThunk<void, RegistrationFormData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postRegistrationFormData',
  async({name, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<RegistrationFormData>('/registration', {name, password});
      dispatch(setRegistrationData(data));
    } catch {
      dispatch(setDataError(true));
    }
  }
);

export const postLoginDataAction = createAsyncThunk<void, LoginFormData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postLoginDataAction',
  async({email, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<LoginFormData>('/login', {email, password});
      dispatch(setLoginData(data));
    } catch {
      dispatch(setDataError(true));
    }
  }
);

export const postChangePasswordAction = createAsyncThunk<void, ChangePasswordData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postChangePasswordAction',
  async({password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<ChangePasswordData>('/changePass', {password});
      dispatch(changePassword(data));
    } catch {
      dispatch(setDataError(true));
    }
  }
);

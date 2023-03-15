import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '.';
import { EmailData } from '../types/invite-form';
import { RecoveryFormData } from '../types/recovery-form';
import { RegistrationFormData } from '../types/registration-form';
import { setDataError, setRecoveryData, setRegistrationData, setUserData } from './actions';

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

export const postRecoveryFormData = createAsyncThunk<void, RecoveryFormData, {
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

export const postRegistrationData = createAsyncThunk<void, RegistrationFormData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postRecoveryFormData',
  async({name, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<RegistrationFormData>('/registration', {name, password});
      dispatch(setRegistrationData(data));
    } catch {
      dispatch(setDataError(true));
    }
  }
);

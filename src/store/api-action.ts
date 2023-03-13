import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '.';
import { EmailData } from '../types/emaildata';
import { setDataError, setUserData } from './actions';

export const postUserDataAction = createAsyncThunk<void, EmailData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postUserDataAction',
  async({emailValues, rolesValues}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<EmailData>('invite', {emailValues, rolesValues});
      dispatch(setUserData(data));
    } catch{
      dispatch(setDataError(true));
    }
  }
);

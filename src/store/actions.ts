import { createAction } from '@reduxjs/toolkit';
import { EmailData } from '../types/emaildata';

export const setUserData = createAction('setUserData',
  (userData: EmailData) => ({payload: userData})
);

export const setDataError = createAction('setDataError',
  (isError: boolean) => ({payload: isError})
);

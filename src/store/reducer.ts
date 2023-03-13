import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { EmailData } from '../types/emaildata';
import { setDataError, setUserData } from './actions';

type initialStateType = {
  emailData: EmailData;
  isError: boolean;
}

const initialState: initialStateType = {
  emailData: {
    emailValues: '',
    rolesValues: '',
  },
  isError: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUserData, (state, action: PayloadAction<EmailData>) => {
      state.emailData = action.payload;
    })
    .addCase(setDataError, (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    });
});

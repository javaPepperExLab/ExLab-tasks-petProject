import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '../services/api';
import { reducer } from '../store/reducer';

const api = createApi();

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

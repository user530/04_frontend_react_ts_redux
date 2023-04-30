import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';
import homepageReducer from './containers/homepage/homepageSlice';

export const store = configureStore({
  reducer: {
    homePage: homepageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxLogger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

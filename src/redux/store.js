import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

const reducer = combineReducers({
  userReducer,
});

export const store = configureStore({
  reducer,
});

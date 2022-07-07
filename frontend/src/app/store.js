import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/forms/formSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    forms: formReducer,
    auth: authReducer
  },
});

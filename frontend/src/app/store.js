import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/forms/formSlice'

export const store = configureStore({
  reducer: {
    forms: formReducer
  },
});

import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import quoteReducer from '../features/quotes/quoteSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    quote: quoteReducer
  },
});

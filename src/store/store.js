import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './slice/DarkModeStateSlice';
export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});

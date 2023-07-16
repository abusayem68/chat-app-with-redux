import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
  devTools: !import.meta.env.PROD,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

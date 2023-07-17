import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSclice';
import authSliceReducer from '../features/auth/authSlice';
import conversationsSliceReducer from '../features/conversations/conversationsSlice';
import messagesSliceReducer from '../features/messages/messagesSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    conversations: conversationsSliceReducer,
    messages: messagesSliceReducer,
  },
  devTools: !import.meta.env.PROD,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

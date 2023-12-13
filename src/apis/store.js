import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './apiSlice';
import { api } from './api';

const store = configureStore({
  reducer: {
    api: apiReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 128 },
    serializableCheck: { warnAfter: 128 },
  }).concat(api.middleware),
});

export default store;

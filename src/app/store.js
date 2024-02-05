import { configureStore } from '@reduxjs/toolkit'

// connecting api with the store

import {cryptoApi} from '../services/cryptoApi'

export const store = configureStore({
  // Add the generated reducer as a specific top-level slice
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(cryptoApi.middleware),
});
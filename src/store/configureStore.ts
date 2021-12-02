import { configureStore } from '@reduxjs/toolkit';
import { createReducer } from './reducers';
import { rootApi } from 'app/services/api';
export function configureAppStore() {
  const store = configureStore({
    reducer: createReducer(),
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(rootApi.middleware),
    devTools:
      /* istanbul ignore next line */
      process.env.NODE_ENV !== 'production' ||
      process.env.PUBLIC_URL.length > 0,
  });

  return store;
}

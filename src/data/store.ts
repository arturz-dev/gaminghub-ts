import { configureStore } from '@reduxjs/toolkit'
import blogDataReduxReducer from '../features/blogDataSlice'
import currencyDataReduxReducer from '../features/currencyDataSlice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, blogDataReduxReducer)

export const store = configureStore({
  reducer: {
    blogDataRedux: persistedReducer,
    currencyDataRedux: currencyDataReduxReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

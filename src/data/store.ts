import { configureStore } from '@reduxjs/toolkit'
import blogDataReduxReducer from '../features/blogDataSlice'
import currencyDataReduxReducer from '../features/currencyDataSlice'

export const store = configureStore({
  reducer: {
    blogDataRedux: blogDataReduxReducer,
    currencyDataRedux: currencyDataReduxReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

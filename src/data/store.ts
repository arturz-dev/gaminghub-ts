import { configureStore } from '@reduxjs/toolkit'
import blogDataReduxReducer from '../features/blogDataSlice'
//import apiDataReduxReducer from '../features/APIDataSlice'

export const store = configureStore({
  reducer: {
    blogDataRedux: blogDataReduxReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//   apiDataRedux: apiDataReduxReducer,

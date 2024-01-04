import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { initialBlogListData } from '../data/initialData'

export interface ratesTypes {
  currency: string
  code: string
  mid: number
}

export interface tableTypes {
  effectiveDate: string
  no: string
  rates: ratesTypes[]
  table: string
}

const initialState = {
  blogData: initialBlogListData,
  rates: [],
  isLoading: false,
  isError: false,
}

const blogDataSlice = createSlice({
  name: 'blogDataRedux',
  initialState,
  reducers: {
    getFromLocalStorage: (state) => {
      const saved = localStorage.getItem('blogDataLS')
      if (saved !== null) state.blogData = JSON.parse(saved)
      else state.blogData = initialBlogListData
    },
    removeBlog: (state, action: PayloadAction<number>) => {
      state.blogData = state.blogData.filter((item) => item.date !== action.payload)
      localStorage.setItem('blogDataLS', JSON.stringify(state.blogData))
    },
    addBlog: (state, action) => {
      state.blogData = [...state.blogData, action.payload]
      localStorage.setItem('blogDataLS', JSON.stringify(state.blogData))
    },
  },
})

//console.log('cartslice' , blogDataSlice)

export default blogDataSlice.reducer

export const { removeBlog, addBlog, getFromLocalStorage } = blogDataSlice.actions

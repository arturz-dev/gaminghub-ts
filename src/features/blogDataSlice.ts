import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
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

export const fetchRates = createAsyncThunk('blog/rates', async () => {
  const response = await fetch('http://api.nbp.pl/api/exchangerates/tables/A/')
  const data = response.json()
  return data
})

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
  extraReducers: (builder) => {
    builder.addCase(fetchRates.fulfilled, (state, action) => {
      const currencies = action.payload
      state.rates = currencies.find((item: tableTypes) => item.table === 'A').rates
      console.log('🚀 ~ file: blogDataSlice.ts:45 ~ builder.addCase ~ rates:', currencies)
      state.isLoading = false
    }),
      builder.addCase(fetchRates.pending, (state) => {
        state.isLoading = true
      }),
      builder.addCase(fetchRates.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
  },
})

//console.log('cartslice' , blogDataSlice)

export default blogDataSlice.reducer

export const { removeBlog, addBlog, getFromLocalStorage } = blogDataSlice.actions

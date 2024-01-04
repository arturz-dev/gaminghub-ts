import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
//import CurrencyTable from '../components/pages/APIRedux/CurrencyTable'

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
  currencyTableDate: [],
  currencyTableNo: [],
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
  name: 'currencyDataRedux',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRates.fulfilled, (state, action) => {
      const currencies = action.payload
      state.currencyTableDate = currencies.find(
        (item: tableTypes) => item.table === 'A',
      ).effectiveDate
      state.rates = currencies.find((item: tableTypes) => item.table === 'A').rates
      state.currencyTableNo = currencies.find((item: tableTypes) => item.table === 'A').no

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

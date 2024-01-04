import { useEffect } from 'react'
import { useAppSelector } from '../../../features/reduxHooks'
import { useAppDispatch } from '../../../features/reduxHooks'
import CurrencyTable from './CurrencyTable'
import { fetchRates } from '../../../features/currencyDataSlice'

const TestApiRedux = () => {
  const { isError, isLoading } = useAppSelector((state) => state.blogDataRedux)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchRates())
  }, [])

  return (
    <div className='currency'>
      {isError && <div>error</div>}
      {isLoading && <div>loading</div>}
      {!isLoading && <div></div>}
      <div className='currency-container'>
        <CurrencyTable />
      </div>
    </div>
  )
}

export default TestApiRedux

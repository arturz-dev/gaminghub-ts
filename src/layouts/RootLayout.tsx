import Navbar from '../components/navbar/Navbar'
import { useAppDispatch } from '../features/reduxHooks'
import { getFromLocalStorage } from '../features/blogDataSlice'
import { useEffect } from 'react'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { fetchRates } from '../features/currencyDataSlice'

const RootLayout = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    //dispatch(getFromLocalStorage())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dispatch(fetchRates())
  }, [])

  return (
    <div className='root'>
      <Helmet>
        <title>gaminhub</title>
      </Helmet>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout

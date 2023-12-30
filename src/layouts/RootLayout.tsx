import Navbar from '../components/navbar/Navbar'
import { useAppDispatch } from '../features/reduxHooks'
import { getFromLocalStorage } from '../features/blogDataSlice'
import { useEffect } from 'react'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const RootLayout = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getFromLocalStorage())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='root'>
      <Helmet>
        <title>gaminhub Home</title>
      </Helmet>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout

import Navbar from '../components/navbar/Navbar'
import { useAppDispatch } from '../features/reduxHooks'
import { getFromLocalStorage } from '../features/blogDataSlice'
import { useEffect } from 'react'
import Footer from '../components/footer/Footer'
import Home from '../components/home/Home'

const RootLayout = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getFromLocalStorage())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default RootLayout

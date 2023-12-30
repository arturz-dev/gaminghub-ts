import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollTop = (props) => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({
      top: 1,
      left: 1,
      behavior: 'smooth',
    })
  }, [location])

  return <>{props.children}</>
}

export default ScrollTop

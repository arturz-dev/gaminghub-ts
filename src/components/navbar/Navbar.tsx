import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import NavMain from './NavMain'

const Navbar = () => {
  return (
    <>
      <div className='nav'>
        <div className='nav-logo'>
          <Link to='/' className='links'>
            {' '}
            <img src={logo} width={200}></img>
          </Link>
        </div>
        <NavMain />
      </div>
    </>
  )
}

export default Navbar

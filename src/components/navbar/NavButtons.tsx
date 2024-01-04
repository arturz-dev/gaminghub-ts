import { ArrowDropDown } from '@mui/icons-material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

interface buttonData {
  name: string
  id: number
  hashlink?: string
  src: string
}

type NavButtonProps = {
  data: buttonData[]
  title: string
  status: string
}

const NavButton = ({ data, title, status }: NavButtonProps) => {
  const [show, setShow] = useState(false)

  return (
    <div className={status} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <h5>
        {title}
        <span className='nav-btn--icon'>
          <ArrowDropDown />
        </span>
      </h5>
      <ul className='nav-dropdown'>
        {data.map((item) => {
          if (show) {
            if (typeof item.hashlink !== 'undefined') {
              return (
                <li
                  key={item.id}
                  className='nav-dropdown-item'
                  style={{
                    animation: 'inAnimation 330ms ease-in',
                    animationFillMode: 'forwards',
                  }}
                >
                  <HashLink className='links' to={item.hashlink}>
                    {item.name}
                  </HashLink>
                </li>
              )
            } else {
              return (
                <li
                  key={item.id}
                  className='nav-dropdown-item links'
                  style={{
                    animation: 'inAnimation 330ms ease-in',
                    animationFillMode: 'forwards',
                  }}
                >
                  <Link className='links' to={item.src}>
                    {item.name}
                  </Link>
                </li>
              )
            }
          }
        })}
      </ul>
    </div>
  )
}

export default NavButton

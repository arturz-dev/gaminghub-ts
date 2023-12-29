import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { useState } from 'react'
import { useAppSelector } from '../../features/reduxHooks'

type CategoriesProps = {
  item: string
}

const Categories: React.FC<CategoriesProps> = ({ item }) => {
  const { blogData } = useAppSelector((state) => state.blogDataRedux)
  const [show, setShow] = useState(false)
  const mountedStyle = { animation: 'inAnimation 250ms ease-in' }
  const unmountedStyle = {
    animation: 'outAnimation 270ms ease-out',
    animationFillMode: 'forwards',
  }

  const categoriesValue = (cat: string) => {
    return blogData.filter((item) => item.tag === cat).length
  }
  return (
    <div
      onMouseEnter={() => {
        setShow(true)
      }}
      onMouseLeave={() => {
        setShow(false)
      }}
      className='footer-tags'
    >
      <div
        className='footer-category'
        style={{ display: 'flex', flexDirection: 'row', color: 'grey' }}
      >
        {show ? (
          <span style={show ? mountedStyle : unmountedStyle} className='footer-span'>
            <ArrowRightIcon />
          </span>
        ) : (
          ''
        )}

        <h5>
          {item}
          <span style={{ marginLeft: 4 }}>{`(${categoriesValue(item)})`}</span>
        </h5>
      </div>
      <div className='footer-line footer-line--full'></div>
    </div>
  )
}

export default Categories

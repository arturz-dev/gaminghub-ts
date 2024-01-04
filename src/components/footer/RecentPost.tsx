import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone'
import dayjs from 'dayjs'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../features/reduxHooks'

const RecentPost = () => {
  const { blogData } = useAppSelector((state) => state.blogDataRedux)
  const newestData = [...blogData].sort((a, b) => b.date - a.date).slice(0, 3)

  return (
    <div className='footer-recent'>
      <div className='footer-header'>
        <h4>Newest Posts</h4>
        <div className='footer-line footer-line--about'></div>
      </div>

      {newestData.map((item) => (
        <div key={item.date} className='footer-block'>
          <NavLink className='links' to={`../${item.date}`}>
            <img src={item.img} height={75} width={75} style={{ objectFit: 'cover' }} />
          </NavLink>
          <div className='footer-content'>
            <NavLink className='links' to={`../${item.date}`}>
              <h5>{item.title}</h5>
            </NavLink>
            <div className='footer-date' style={{ display: 'flex', flexDirection: 'row' }}>
              <h5 style={{ textTransform: 'uppercase', marginRight: 10 }}>BY: {item.author}</h5>
              <span style={{ margin: '2px 10px 5px 0px' }}>
                <WatchLaterTwoToneIcon fontSize='small' />
              </span>
              <h5>{dayjs(item.date).format('MMMM, DD, YYYY').toUpperCase()}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecentPost

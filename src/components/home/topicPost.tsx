import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone'
import { NavLink } from 'react-router-dom'
import dayjs from 'dayjs'
import { useAppSelector } from '../../features/reduxHooks'

const TopicPost = () => {
  const { blogData } = useAppSelector((state) => state.blogDataRedux)
  const topicPostData2 = [...blogData].sort((a, b) => a.date - b.date).slice(4, 8)
  return (
    <section id='topicId' className='topic'>
      <div className='topic-header'>
        <h3>Topic post</h3>
        <div className='topic-line'></div>
      </div>
      <div className='topic-main'>
        {topicPostData2.map((item) => (
          <div key={item.date} className='topic-block'>
            <img width={'100%'} height={450} style={{ objectFit: 'cover' }} src={item.img}></img>
            <h4>{item.tag}</h4>
            <NavLink className='links' to={`../${item.date}`}>
              <h3>{item.title}</h3>
            </NavLink>
            <p>{item.description}</p>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <h5 style={{ textTransform: 'uppercase', marginRight: 10 }}>BY: {item.author}</h5>
              <span style={{ margin: '-5px 10px 0 0px' }}>
                <WatchLaterTwoToneIcon />
              </span>
              <h5>{dayjs(item.date).format('MMMM, DD, YYYY').toUpperCase()}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TopicPost

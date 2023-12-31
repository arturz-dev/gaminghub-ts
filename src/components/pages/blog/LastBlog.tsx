import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone'
import dayjs from 'dayjs'
import { useAppSelector } from '../../../features/reduxHooks'

const LastBlog = () => {
  const { blogData } = useAppSelector((state) => state.blogDataRedux)
  const blogItem = [...blogData].sort((a, b) => b.date - a.date).slice(0, 1)[0]
  return (
    <div className='blog shadow-inside'>
      <h5>{blogItem.tag}</h5>
      <h1>{blogItem.title}</h1>
      <div className='blog-data' style={{ display: 'flex', flexDirection: 'row' }}>
        <h5 style={{ textTransform: 'uppercase', marginRight: 10 }}>BY: {blogItem.author}</h5>
        <span style={{ margin: '20px 1px 10px 5px' }}>
          <WatchLaterTwoToneIcon fontSize='small' />
        </span>
        <h5>{dayjs(blogItem.date).format('MMMM, DD, YYYY').toUpperCase()}</h5>
      </div>
      <img width={'100%'} src={blogItem.img}></img>
      <div dangerouslySetInnerHTML={{ __html: blogItem.content }} />
    </div>
  )
}

export default LastBlog

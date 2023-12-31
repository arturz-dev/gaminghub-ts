import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone'
import { useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import { Helmet } from 'react-helmet'
import { useAppSelector } from '../../../features/reduxHooks'

const Blog = () => {
  const { blogData } = useAppSelector((state) => state.blogDataRedux)
  const { itemDate } = useParams()
  const blogDate = Number(itemDate)

  const thisBlogArray = [blogData.find((item) => item.date === blogDate)]
  const thisBlog = thisBlogArray[0]

  if (thisBlog !== undefined)
    return (
      <div className='blog shadow-inside'>
        <Helmet>
          <title>{thisBlog.title}</title>
        </Helmet>
        <h5>{thisBlog.tag}</h5>
        <h1>{thisBlog.title}</h1>
        <div className='blog-data' style={{ display: 'flex', flexDirection: 'row' }}>
          <h5 style={{ textTransform: 'uppercase', marginRight: 10 }}>BY: {thisBlog.author}</h5>
          <span style={{ margin: '20px 1px 10px 5px' }}>
            <WatchLaterTwoToneIcon fontSize='small' />
          </span>
          <h5>{dayjs(thisBlog.date).format('MMMM, DD, YYYY').toUpperCase()}</h5>
        </div>
        <img width={'100%'} src={thisBlog.img}></img>
        <div dangerouslySetInnerHTML={{ __html: thisBlog.content }} />
      </div>
    )
  else
    return (
      <h3 className='notfound-msg'>
        🚫 Page does not exist on gaming<span style={{ color: '#2dc7bd' }}>hub</span> 🚫
      </h3>
    )
}

export default Blog

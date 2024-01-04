import { Link } from 'react-router-dom'
import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone'
import dayjs from 'dayjs'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'
import { removeBlog } from '../../../features/blogDataSlice'
import { initialBlogListDataTypes } from '../../../data/initialData'

interface blogItemProps {
  item: initialBlogListDataTypes
}

const BlogItem = ({ item }: blogItemProps) => {
  const dispatch = useDispatch()

  return (
    <div className='bloglist-block shadow-inside' key={item.date}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ display: 'flex' }}>
          <div>
            <img width={100} height={70} src={item.img} style={{ marginRight: '10px' }} />
          </div>
          <div>
            <h5>{item.tag}</h5>
            <Link className='links' to={`../${item.date}`}>
              <h3>{item.title}</h3>
            </Link>

            <div style={{ display: 'flex' }}>
              <h5 className='bloglist-author'>BY: {item.author}</h5>
              <span style={{ margin: '0px 5px 0px 0px' }}>
                <WatchLaterTwoToneIcon fontSize='small' />
              </span>
              <h5>{dayjs(item.date).format('MMMM, DD, YYYY').toUpperCase()}</h5>
            </div>
          </div>
        </div>
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 10,
          }}
          title='Click to delete blog'
        >
          <IconButton
            onClick={() => dispatch(removeBlog(item.date))}
            aria-label='delete'
            size='small'
            color='error'
            title='Click to delete blog'
          >
            <DeleteIcon fontSize='inherit' />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default BlogItem

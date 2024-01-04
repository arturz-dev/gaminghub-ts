import Carousel from 'react-material-ui-carousel'
import { Button } from '@mui/material'
import TopicPost from './topicPost'
import Offers from './Offers'
import Bulletin from './Bulletin'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../features/reduxHooks'

function Home() {
  const { blogData } = useAppSelector((state) => state.blogDataRedux)

  const carouselData = [...blogData].slice(0, 4)

  return (
    <>
      <Carousel IndicatorIcon={false} interval={12000}>
        {carouselData.map((item) => (
          <div
            id='homeId'
            key={item.date}
            className='home'
            style={{ backgroundImage: `url(${item.img})`, objectFit: 'none' }}
          >
            <h5>{item.tag}</h5>
            <NavLink className='links' to={`../${item.date}`}>
              <h1>{item.title}</h1>
            </NavLink>
            <p>{item.description}</p>
            <NavLink className='links' to={`../${item.date}`}>
              <Button
                style={{
                  borderRadius: 1,
                  backgroundColor: '#181a1b',
                  padding: '9px 25px',
                  fontSize: '0.8em',
                  marginTop: '20px',
                }}
                variant='contained'
              >
                READ MORE
              </Button>
            </NavLink>
          </div>
        ))}
      </Carousel>
      <TopicPost />
      <Offers />
      <Bulletin />
    </>
  )
}

export default Home

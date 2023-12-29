import FacebookIcon from '@mui/icons-material/Facebook'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'

const Bar = () => {
  const yearDate = new Date().getFullYear()
  return (
    <>
      <div className='footer-socials'>
        <div title='rss' className='footer-icon'>
          <RssFeedIcon />
        </div>
        <div title='facebook' className='footer-icon'>
          <FacebookIcon />
        </div>
        <div title='twitter' className='footer-icon'>
          <TwitterIcon />
        </div>
        <div title='instagram' className='footer-icon'>
          <InstagramIcon />
        </div>
        <div title='pinterest' className='footer-icon'>
          <PinterestIcon />
        </div>
      </div>
      <div className='footer-info'>
        © {yearDate} ArtDev Interactive Technologies, All Rights Reserved
      </div>
    </>
  )
}

export default Bar

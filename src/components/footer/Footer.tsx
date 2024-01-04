import About from './About'
import RecentPost from './RecentPost'
import Popular from './Popular'
import Bar from './Bar'

const Footer = () => {
  return (
    <>
      <div id='footer' className='footer'>
        <div>
          <About />
        </div>
        <div className='footer-recent'>
          <RecentPost />
        </div>
        <div className='footer-popular'>
          <Popular />
        </div>
      </div>
      <div className='footer-bar'>
        <Bar />
      </div>
    </>
  )
}

export default Footer

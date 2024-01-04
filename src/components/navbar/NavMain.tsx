import NavButton from './NavButtons'
import routerPaths from '../../data/routherPaths'

const NavMain = () => {
  const homeBtnData = [
    { name: 'WELL TIMED', id: 1, hashlink: routerPaths.HOME_CAROUSEL, src: 'none' },
    { name: 'TOPIC POST', id: 2, hashlink: routerPaths.TOPIC_POST, src: 'none' },
    { name: 'ON SALE', id: 3, hashlink: routerPaths.ON_SALE, src: 'none' },
    { name: 'BULLETIN', id: 4, hashlink: routerPaths.BULLETIN, src: 'none' },
    { name: 'FOOTER', id: 5, hashlink: routerPaths.FOOTER, src: 'none' },
  ]

  const blogBtnData = [
    { name: 'NEW BLOG', id: 1, src: routerPaths.NEW_BLOG },
    { name: 'LAST BLOG', id: 2, src: routerPaths.LAST_BLOG },
    { name: 'BLOG LIST', id: 3, src: routerPaths.BLOG_LIST },
  ]

  const featuresData = [
    { name: 'CURRENCY', id: 1, src: routerPaths.API_REDUX },
    { name: 'POST/COMMENTS', id: 2, src: routerPaths.API_TEST },
  ]

  return (
    <div style={{ textDecoration: 'none', color: 'white' }} className='nav-main'>
      <NavButton data={homeBtnData} status='nav-btn' title={'HOME'} />
      <NavButton data={blogBtnData} status='nav-btn' title={'BLOG'} />
      <NavButton data={[]} status='nav-btn btn-nonactive' title={'NEWS'} />
      <NavButton data={featuresData} status='nav-btn' title={'API FEATURES'} />
      <NavButton data={[]} status='nav-btn btn-nonactive' title={'INNOVATION'} />
    </div>
  )
}

export default NavMain

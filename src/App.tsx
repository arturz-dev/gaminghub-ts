import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './components/home/Home'
import routerPaths from './data/routherPaths'
import Blog from './components/pages/Blog'
//import ScrollTop from './features/scrollTop.jsx'
import BlogList from './components/pages/BlogList'
import LastBlog from './components/pages/LastBlog'
import PageNotFoundMsg from './components/pages/NotExist'
import NewBlog from './components/pages/NewBlog'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path={routerPaths.BLOG} element={<Blog />} />
          <Route path={routerPaths.BLOG_LIST} element={<BlogList />} />
          <Route path={routerPaths.LAST_BLOG} element={<LastBlog />} />
          <Route path={routerPaths.NEW_BLOG} element={<NewBlog />} />
          <Route path='*' element={PageNotFoundMsg()} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

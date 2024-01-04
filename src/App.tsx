import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './components/home/Home'
import routerPaths from './data/routherPaths'
import Blog from './components/pages/blog/Blog'
//import ScrollTop from './features/scrollTop.jsx'
import BlogList from './components/pages/blog/BlogList'
import LastBlog from './components/pages/blog/LastBlog'
import PageNotFoundMsg from './components/pages/blog/NotExist'
import NewBlog from './components/pages/blog/NewBlog'
import APITest from './components/pages/APITest/APITest'
import TestApiRedux from './components/pages/APIRedux/TestApiRedux'

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
          <Route path={routerPaths.API_TEST} element={<APITest />} />
          <Route path={routerPaths.API_REDUX} element={<TestApiRedux />} />
          <Route path='*' element={PageNotFoundMsg()} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

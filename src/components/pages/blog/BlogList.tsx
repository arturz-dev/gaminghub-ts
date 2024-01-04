import { useEffect, useState, useCallback } from 'react'
import ButtonSort from './buttonSort'
import BlogItem from './BlogItem'
import { Helmet } from 'react-helmet'
import { useAppSelector } from '../../../features/reduxHooks'
import { initialBlogListDataTypes } from '../../../data/initialData'

const BlogList: React.FC = () => {
  const { blogData } = useAppSelector((state) => state.blogDataRedux)
  const [blogList, setBlogList] = useState<initialBlogListDataTypes[] | []>([])

  console.log('component render')

  const sortData = useCallback(() => {
    setBlogList(blogData)
  }, [blogData, setBlogList])

  useEffect(() => {
    sortData() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogData])

  /*useEffect(() => {
    const saved = localStorage.getItem('blogListFilter')
    const localStorageFilter = JSON.parse(saved)
    console.log('lsfilter', localStorageFilter)
    setNewestBlog(blogData.filter((blog) => blog.author === localStorageFilter))
  }, [blogData])*/

  return (
    <>
      {' '}
      <Helmet>
        <title>Blog List</title>
      </Helmet>
      <div className='bloglist'>
        <div className='bloglist-content'>
          <ButtonSort setBlogList={setBlogList} blogList={blogList} />
          <h1>
            {' '}
            GAMING<span style={{ color: '#2dc7bd' }}>HUB</span> BLOG LIST
          </h1>
          {blogList.map((item) => (
            <BlogItem key={item.date} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default BlogList

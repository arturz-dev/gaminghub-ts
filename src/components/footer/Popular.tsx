import Categories from './Categories'
import { useAppSelector } from '../../features/reduxHooks'

const Popular: React.FC = () => {
  const { blogData } = useAppSelector((state) => state.blogDataRedux)
  const categoriesList = [...new Set(blogData.map((item) => item.tag))]
  //.sort((a, b) => a - b)
  // .slice(0, 6)

  return (
    <>
      <div className='footer-header'>
        <h4>Popular Categories</h4>
        <div className='footer-line footer-line--popular'></div>
      </div>
      <div>
        {categoriesList.map((item: string) => {
          return <Categories key={item} item={item} />
        })}
      </div>
    </>
  )
}

export default Popular

import { useEffect, useState } from 'react'
import Comments from './Comments'

interface dataAPIProps {
  body: string
  id: number
  title: string
  userId: number
}

const APITest: React.FC = () => {
  const [dataAPI, setDataAPI] = useState<dataAPIProps[] | []>([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const apiURL = 'https://jsonplaceholder.typicode.com/posts'

  const fetchDataFromAPI = () => {
    setLoading(true)
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setDataAPI(data))
      .then(() => setLoading(false))
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }

  useEffect(() => {
    fetchDataFromAPI()
  }, [])

  if (loading)
    return (
      <div className='msg-comments'>
        DATA LOADING ... <span>⏳</span>
      </div>
    )
  else if (error) return <div className='msg-comments'>ERROR WITH FETCH DATA ❌</div>
  else
    return (
      <div className='apitest'>
        <ul>
          {dataAPI.map((item) => (
            <li className='apitest-item shadow-inside' key={item.id}>
              <h5>{item.title}</h5>
              <p>{item.body}</p>
              <Comments blog={item.id} />
            </li>
          ))}
        </ul>
      </div>
    )
}

export default APITest

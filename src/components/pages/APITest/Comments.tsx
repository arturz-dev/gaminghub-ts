import { useEffect, useState, useMemo } from 'react'

interface commentsDataProps {
  body: string
  email: string
  id: number
  name: string
  postId: number
}

interface blogProp {
  blog: number
}

const Comments = ({ blog }: blogProp) => {
  const [show, setShow] = useState<boolean>(false)
  const [commentsData, setCommentsData] = useState<commentsDataProps[] | []>([])
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const commentsURL = 'https://jsonplaceholder.typicode.com/comments'

  const fetchCommentsData = () => {
    setLoading(true)
    fetch(commentsURL)
      .then((res) => res.json())
      .then((data) => setCommentsData(data))
      .then(() => setLoading(false))
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }

  const matchedCommentsData = useMemo(() => {
    return commentsData.filter((comment) => comment.postId === blog)
  }, [commentsData, blog])

  const toggleComments = () => {
    setShow(!show)
  }

  useEffect(() => {
    fetchCommentsData()
  }, [])

  if (loading)
    return (
      <div className='msg-comments'>
        COMMENTS DATA LOADING ... <span>⏳</span>
      </div>
    )
  else if (error) return <div className='msg-comments'>ERROR WITH FETCH COMMENTS DATA ❌</div>
  else
    return (
      <div>
        <h4 onClick={toggleComments}>COMMENTS {show ? '⬆️' : '⬇️'} </h4>
        {show && (
          <ul>
            {matchedCommentsData.map((comment) => (
              <li className='apitest-comment' key={comment.id}>
                <img
                  width={70}
                  height={70}
                  src='https://secure.gravatar.com/avatar/279e22ae88264ca29a99c4a0f20fe65a?s=90&d=mm&r=g'
                />
                <div>
                  <h5>
                    <span>USER:</span> {comment.email}
                  </h5>
                  <p>{comment.body}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
}

export default Comments

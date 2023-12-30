//import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { initialBlogListDataTypes } from '../../data/initialData'
//import { useAppSelector } from '../../features/reduxHooks'

interface buttonSortProps {
  blogList: [] | initialBlogListDataTypes[]
  setBlogList: React.Dispatch<React.SetStateAction<[] | initialBlogListDataTypes[]>>
}

const ButtonSort = ({ setBlogList, blogList }: buttonSortProps) => {
  //const { blogData } = useAppSelector((state) => state.blogDataRedux)

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? 'blue' : 'whitesmoke',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    flexGrow: 1,
  }))

  const sortDownByDate = () => {
    setBlogList([...blogList].sort((a, b) => b.date - a.date))
  }
  const sortUpByDate = () => {
    setBlogList([...blogList].sort((a, b) => a.date - b.date))
  }
  const sortUpByTitle = () => {
    setBlogList(
      [...blogList].sort((a, b) => {
        if (a.title < b.title) {
          return -1
        }
        if (b.title < a.title) {
          return 1
        }
        return 0
      }),
    )
  }
  const sortDownByTitle = () => {
    setBlogList(
      [...blogList].sort((a, b) => {
        if (a.title > b.title) {
          return -1
        }
        if (b.title > a.title) {
          return 1
        }
        return 0
      }),
    )
  }
  return (
    <>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          height: 30,
          width: 70,
          gap: 1,
          position: 'absolute',
          marginTop: 9,
          marginLeft: 0.5,
        }}
      >
        <Item onClick={sortDownByDate}>NEWEST |</Item>
        <Item onClick={sortUpByDate}>OLDEST |</Item>
        <Item onClick={sortUpByTitle}>TITLE|A-Z |</Item>
        <Item onClick={sortDownByTitle}> TITLE|Z-A</Item>
      </Stack>
    </>
  )
}

export default ButtonSort

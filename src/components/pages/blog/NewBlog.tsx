import  { useState } from 'react'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { Button } from '@mui/material'
import { Editor } from 'primereact/editor'
import { addBlog } from '../../../features/blogDataSlice'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import ClearIcon from '@mui/icons-material/Clear';

const NewBlog = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const [tag, setTag] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [alert, setAlert] = useState(false)

  /* const valueChange = (set, event) => {
    set(event.target.value)
  }

  const handleTag = (event) => {
    setTag(event.target.value)
  }

  useEffect(() => {
    console.log('title:', title)
  }, [title])
  useEffect(() => {
    console.log('author:', author)
  }, [author])
  useEffect(() => {
    console.log('description:', description)
  }, [description])
  useEffect(() => {
    console.log('imageURL:', imageURL)
  }, [imageURL])
  useEffect(() => {
    console.log('tag:', tag)
  }, [tag]) */

  const clearInputs = () => {
    setDescription('')
    setText('')
    setImageURL('')
    setTitle('')
    setAuthor('')
  }

  function DescriptionAlerts() {
    return (
      <Stack sx={{ width: '500px' }} spacing={2}>
        <Alert variant="filled"  severity='error' >
         <AlertTitle>Error </AlertTitle>
          All form fields must be completed to add a new blog.
          <ClearIcon fontSize='small' onClick={() => setAlert(false)} sx={{cursor: 'pointer'}} style={{position: 'absolute', marginLeft: '90px', marginTop: '-35px'}}/>
        </Alert>       
      </Stack>
    );
  }


  const createBlog = () => {
    const newBlog = {
      title: title,
      author: author,
      tag: tag,
      description: description,
      content: text,
      date: Date.now(),
      img: `${imageURL}`,
    }
    if (author === '' || title === '' || description === '' || text === '' || imageURL === '') {
      setAlert(true) 
    }
    else {    dispatch(addBlog(newBlog))
      clearInputs()
      toast.success('Your new blog has been added!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })}

    console.log(newBlog)
  }

  return (
    <>
    
   
      {' '}
      <h1 style={{ textAlign: 'center', margin: '50px 0 -150px 0', color: 'whitesmoke' }}>
        ADD YOUR OWN GAMING<span style={{ color: '#2dc7bd' }}>HUB</span> BLOG
      </h1>
    
      
      <div className='newblog shadow-inside'>
      { alert && <div style={{display:  'flex' , alignItems: 'center', justifyContent: 'center', zIndex: 99999, position: 'absolute', width: '760px', height: '100%' , }}><DescriptionAlerts /></div> }
        <div className='newblog-inputs'>
     
        
          <TextField
            sx={{ width: '40%' }}
            id='outlined-basic'
            label='Title'
            variant='outlined'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          <TextField
            sx={{ width: '40%' }}
            id='outlined-basic'
            label='Author'
            variant='outlined'
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value)
            }}
          />
          <FormControl sx={{ width: '20%' }}>
            <InputLabel id='demo-simple-select-label'>Tag</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={tag}
              label='Tag'
              onChange={(e) => {
                setTag(e.target.value)
              }}
            >
              <MenuItem value={'ANDROID'}>Android</MenuItem>
              <MenuItem value={'DOWNLOAD'}>Download</MenuItem>
              <MenuItem value={'GAMES'}>Games</MenuItem>
              <MenuItem value={'PLAYER'}>Player</MenuItem>
              <MenuItem value={'STORY'}>Story</MenuItem>
              <MenuItem value={'TEASER'}>Teaser</MenuItem>
            </Select>
          </FormControl>
        </div>
        <TextField
          id='outlined-multiline-static'
          label='Description'
          multiline
          rows={2}
          sx={{ width: '100%', outline: 'red' }}
          style={{ marginTop: '15px', marginBottom: '15px' }}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        />
        <Editor
          value={text}
          // @ts-expect-error: Unreachable code error
          onTextChange={(e) => setText(e.htmlValue)}
          style={{ height: '320px', color: 'black', borderRadius: '0 0 5px 5px' }}
          placeholder='Enter here content for your blog..'
        />

        <TextField
          id='outlined-multiline-static'
          label='Image URL'
          multiline
          rows={1}
          sx={{ width: '100%', outline: 'red' }}
          style={{ marginTop: '15px' }}
          value={imageURL}
          onChange={(e) => {
            setImageURL(e.target.value)
          }}
        />
        <Button
        
          style={{
            borderRadius: 1,
            backgroundColor: '#181a1b',
            padding: '9px 25px',
            fontSize: '0.8em',
            marginTop: '20px',
          }}
          variant='contained'
          onClick={() => createBlog()}
          
        >
          {' '}
          ADD BLOG
        </Button>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </>
  )
}

export default NewBlog

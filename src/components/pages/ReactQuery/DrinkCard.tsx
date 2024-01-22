import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export interface RecipeReviewCardProps {
  [key: string]: string
}

export default function RecipeReviewCard({
  drinkTitle,
  imgSrc,
  instruction,
  ingredient1,
  ingredient2,
  ingredient3,
  glass,
  proportion1,
  proportion2,
  proportion3,
  idDrink,
}: RecipeReviewCardProps) {
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const queryClient = useQueryClient()

  const deleteData = (idDrink: string) => {
    return axios.delete(`http://localhost:4000/drinks/${idDrink}`)
  }

  const { mutate: deleteDrink } = useMutation({
    mutationFn: deleteData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['simplequery'] })
    },
  })

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={drinkTitle}
        subheader={glass}
      />
      <CardMedia component='img' height='194' image={imgSrc} alt='Paella dish' />
      <CardContent>
        <Typography variant='body2' color='text.secondary' sx={{ minHeight: 150 }}>
          {instruction}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <IconButton aria-label='share' onClick={() => deleteDrink(idDrink)}>
          <DeleteForeverIcon fontSize='medium' />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>
          <Typography paragraph>
            <ul>
              <li>
                {ingredient1} - {proportion1}
              </li>
              <li>
                {ingredient2} - {proportion2}
              </li>
              <li>
                {ingredient3} - {proportion3}
              </li>
            </ul>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

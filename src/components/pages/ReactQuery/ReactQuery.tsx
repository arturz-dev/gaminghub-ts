import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import RecipeReviewCard from './DrinkCard'
import styled from 'styled-components'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'

const ReactQueryComp = () => {
  const getData = () => {
    return axios.get('http://localhost:4000/drinks')
  }

  const {
    data: dataFromApi,
    isLoading,
    isError,
  } = useQuery({ queryKey: ['simplequery'], queryFn: getData })

  console.log('dataFromApi:', dataFromApi?.data)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error...</div>

  return (
    <Box sx={{ flexGrow: 1, padding: 7 }}>
      <Grid container spacing={5}>
        {dataFromApi?.data.map((drink) => (
          <Grid xs={6} md={4}>
            <RecipeReviewCard
              drinkTitle={drink.strDrink}
              imgSrc={drink.strDrinkThumb}
              instruction={drink.strInstructions}
              ingredient1={drink.strIngredient1}
              ingredient2={drink.strIngredient2}
              ingredient3={drink.strIngredient3}
              glass={drink.strGlass}
              proportion1={drink.strMeasure1}
              proportion2={drink.strMeasure2}
              proportion3={drink.strMeasure3}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ReactQueryComp

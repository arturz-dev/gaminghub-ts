import { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const InputContainer = styled.div`
  background-color: whitesmoke;
  margin: 100px;
  padding: 25px 15px 25px 15px;
  border-radius: 10px;
  -webkit-box-shadow: inset 0px 0px 15px -1px rgba(0, 0, 0, 1);
  -moz-box-shadow: inset 0px 0px 15px -1px rgba(0, 0, 0, 1);
  box-shadow: inset 0px 0px 15px -1px rgba(0, 0, 0, 1);
`

const NewdDrink = () => {
  const queryClient = useQueryClient()
  // imputStates
  const [drinkName, setDrinkName] = useState<string>('')
  const [drinkGlass, setDrinkGlass] = useState<string>('')
  const [drinkIMG, setDrinkIMG] = useState<string>('')
  const [drinkInstruction, setDrinkInstruction] = useState<string>('')
  const [drinkIngredient1, setDrinkIngredient1] = useState<string>('')
  const [drinkIngredient2, setDrinkIngredient2] = useState<string>('')
  const [drinkIngredient3, setDrinkIngredient3] = useState<string>('')
  const [drinkProportion1, setDrinkProportion1] = useState<string>('')
  const [drinkProportion2, setDrinkProportion2] = useState<string>('')
  const [drinkProportion3, setDrinkProportion3] = useState<string>('')

  interface newDrinkTypes {
    [key: string]: string
  }

  const newDrink: newDrinkTypes = {
    strDrink: drinkName,
    strDrinkThumb: drinkIMG,
    strInstructions: drinkInstruction,
    strIngredient1: drinkIngredient1,
    strIngredient2: drinkIngredient2,
    strIngredient3: drinkIngredient3,
    strGlass: drinkGlass,
    strMeasure1: drinkProportion1,
    strMeasure2: drinkProportion2,
    strMeasure3: drinkProportion3,
    id: `${Date.now()}`,
  }

  const clearInputs = () => {
    setDrinkName('')
    setDrinkGlass('')
    setDrinkIMG('')
    setDrinkInstruction('')
    setDrinkIngredient1('')
    setDrinkIngredient2('')
    setDrinkIngredient3('')
    setDrinkProportion1('')
    setDrinkProportion2('')
    setDrinkProportion3('')
  }

  const postData = () => {
    return axios.post('http://localhost:4000/drinks', newDrink)
  }

  const { mutate: addNewDrink } = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['simplequery'] })
      clearInputs()
    },
  })

  return (
    <InputContainer>
      <Box
        component='form'
        noValidate
        autoComplete='off'
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Grid container spacing={1}>
          <Grid xs={4}>
            <TextField
              fullWidth={true}
              id='outlined-basic'
              label='Drink Name'
              variant='outlined'
              value={drinkName}
              onChange={(e) => {
                setDrinkName(e.target.value)
              }}
            />
          </Grid>
          <Grid xs={4}>
            <TextField
              fullWidth={true}
              id='outlined-basic'
              label='Glass for drink'
              variant='outlined'
              value={drinkGlass}
              onChange={(e) => {
                setDrinkGlass(e.target.value)
              }}
            />
          </Grid>
          <Grid xs={4}>
            <TextField
              fullWidth={true}
              id='outlined-basic'
              label='URL for drink image'
              variant='outlined'
              value={drinkIMG}
              onChange={(e) => {
                setDrinkIMG(e.target.value)
              }}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              fullWidth={true}
              id='outlined-basic'
              label='Preparing instruction..'
              variant='outlined'
              multiline
              rows={3}
              value={drinkInstruction}
              onChange={(e) => {
                setDrinkInstruction(e.target.value)
              }}
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              fullWidth={true}
              id='outlined-basic'
              label='First Ingredient'
              variant='outlined'
              value={drinkIngredient1}
              onChange={(e) => {
                setDrinkIngredient1(e.target.value)
              }}
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              fullWidth={true}
              id='outlined-basic'
              label='Quantity for First Ingredient'
              variant='outlined'
              value={drinkProportion1}
              onChange={(e) => {
                setDrinkProportion1(e.target.value)
              }}
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              fullWidth={true}
              id='outlined-basic'
              label='Second Ingredient'
              variant='outlined'
              value={drinkIngredient2}
              onChange={(e) => {
                setDrinkIngredient2(e.target.value)
              }}
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              fullWidth={true}
              id='outlined-basic'
              label='Quantity for Second Ingredient'
              variant='outlined'
              value={drinkProportion2}
              onChange={(e) => {
                setDrinkProportion2(e.target.value)
              }}
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              fullWidth={true}
              id='outlined-basic'
              label='Third Ingredient'
              variant='outlined'
              value={drinkIngredient3}
              onChange={(e) => {
                setDrinkIngredient3(e.target.value)
              }}
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              fullWidth={true}
              id='outlined-basic'
              label='Quantity for Third Ingredient'
              variant='outlined'
              value={drinkProportion3}
              onChange={(e) => {
                setDrinkProportion3(e.target.value)
              }}
            />
          </Grid>
          <Grid xs={12} marginTop={2}>
            <Button
              onClick={() => addNewDrink()}
              fullWidth={true}
              variant='contained'
              color='success'
            >
              Add drink to the list
            </Button>
          </Grid>
        </Grid>
      </Box>
    </InputContainer>
  )
}

export default NewdDrink

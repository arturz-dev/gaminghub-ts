import { Button } from '@mui/material'

const Bulletin = () => {
  return (
    <div id='bulletinId' className='bulletin'>
      <div className='bulletin-content'>
        <h1>GAMING</h1>
        <p>REGISTER FOR OUR BI-WEEKLY BULLETIN OF THE STUFF THAT REFINES YOU</p>
        <form className='bulletin-form'>
          <input type='text' className='bulletin-input' placeholder='Enter email adress' />
          <Button
            style={{
              borderRadius: 1,
              backgroundColor: '#181a1b',
              padding: '10px 25px',
              fontSize: '0.8em',
              marginTop: '0px',
            }}
            variant='contained'
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Bulletin

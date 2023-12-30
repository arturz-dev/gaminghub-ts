import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone'

const Offers = () => {
  return (
    <div id='onsale' className='offers'>
      <h5>GAME</h5>
      <h1>Windows Store sale nets you Quantum Break</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <span style={{ margin: '18px 10px 0 0px' }}>
          <WatchLaterTwoToneIcon />
        </span>
        <h5>SEPTEMBER 02, 2023</h5>
      </div>
    </div>
  )
}

export default Offers

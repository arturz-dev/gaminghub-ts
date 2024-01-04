import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import EuroIcon from '@mui/icons-material/Euro'
import { ratesTypes } from '../../../features/blogDataSlice'
import { useAppSelector } from '../../../features/reduxHooks'

export default function CurrencyTable() {
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#2dc7bd',
      color: 'black',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }))

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }))

  const { rates, currencyTableDate, currencyTableNo } = useAppSelector(
    (store) => store.currencyDataRedux,
  )

  return (
    <>
      <div className='currency-header'>
        {' '}
        <h3 style={{ color: 'white' }}>TABLE DATE: {currencyTableDate}</h3>
        <h3 style={{ color: 'white' }}>TABLE ID: {currencyTableNo}</h3>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>
                <strong>Currency name</strong>
                <span className='currency-icon'>
                  {' '}
                  <CurrencyExchangeIcon fontSize='small' />
                </span>
              </StyledTableCell>

              <StyledTableCell align='right'>
                <strong>Code</strong>
                <span className='currency-icon'>
                  <EuroIcon fontSize='small' />
                </span>
              </StyledTableCell>
              <StyledTableCell align='center'>
                <strong>Mid</strong>
                <span className='currency-icon'>
                  <CompareArrowsIcon fontSize='small' />
                </span>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rates.map((row: ratesTypes) => (
              <StyledTableRow key={row.currency}>
                <StyledTableCell align='left' component='th' scope='row'>
                  {row.currency}
                </StyledTableCell>
                <StyledTableCell align='right'>{row.code}</StyledTableCell>
                <StyledTableCell align='center'>{row.mid.toFixed(5)}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

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

  const { rates } = useAppSelector((state) => state.blogDataRedux)

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>
                Currency name{' '}
                <span className='currency-icon'>
                  {' '}
                  <CurrencyExchangeIcon fontSize='small' />
                </span>
              </StyledTableCell>

              <StyledTableCell align='right'>
                Code{' '}
                <span className='currency-icon'>
                  <EuroIcon fontSize='small' />
                </span>
              </StyledTableCell>
              <StyledTableCell align='center'>
                Mid
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
                <StyledTableCell align='center'>{row.mid.toFixed(2)}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

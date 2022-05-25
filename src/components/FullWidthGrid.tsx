import Typography from '@mui/material/Typography';
import { MouseEvent, useState } from 'react';
import { Box, Button } from '@mui/material';
import '../App.css'
import { CardDisplay } from './CardDisplay';
import { RootState } from '..';
import { useSelector } from 'react-redux';


export default function FullWidthGrid() {
  const employees = useSelector((state: RootState) => state.setEmployeeReducer.employees)
  const [page, setPage] = useState(0)

  const handleNextClick =(event: MouseEvent) => {
    setPage(page+1)
  }
  const handlePrevClick = (event: MouseEvent)=> {
    setPage(page-1)
  }

  return (
    <div>
      <CardDisplay page={page}/>
      <div className='oneLine'>
        <Box sx={{display: 'flex'}}>
          <Typography sx={{display: {md: 'flex', xl: 'flex', l: 'flex', s:'flex',xs:'none'}}}>Showing items</Typography>
          <Typography sx={{fontWeight: 700, display: {md: 'flex', xl: 'flex', l: 'flex', s:'flex',  xs:'none'}}}>&nbsp;{page*10 + 1}-{employees.length < 10 ? employees.length : page*10+10 }&nbsp;</Typography>
          <Typography sx={{display: {md: 'flex', xl: 'flex', l: 'flex', s:'flex', xs:'none'}}}>out of</Typography>
          <Typography sx ={{fontWeight: 700, display: {md: 'flex', xl: 'flex', l: 'flex', s:'flex', xs:'none'}}}>&nbsp;{employees.length}&nbsp;</Typography> 
          <Typography sx={{display: {md: 'flex', xl: 'flex', l: 'flex', s:'flex', xs:'none'}}}>entries</Typography>
        </Box>
        <div className='divLine'>
          <Button sx={{fontSize: '16px', fontWeight: 700, textTransform: 'none'}} disabled={page === 0} onClick={handlePrevClick}>Previous</Button>
          <Typography sx={{fontWeight: 700}}>{page+1}</Typography>
          <Button sx={{fontSize:'16px', fontWeight: 700, textTransform: 'none'}} disabled={(page+1) === Math.ceil(employees.length/10)} onClick={handleNextClick}>Next</Button>
        </div>
      </div>
    </div>
  );
}



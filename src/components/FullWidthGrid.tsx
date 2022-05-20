import { DummyEmployees } from '../employeesList';
import Typography from '@mui/material/Typography';
import { MouseEvent, useState } from 'react';
import { Button } from '@mui/material';
import '../App.css'
import { CardDisplay } from './CardDisplay';



export default function FullWidthGrid() {
  const [page, setPage] = useState(0)

  const handleNextClick =(event: MouseEvent) => {
    setPage(page+1)
  }
  const handlePrevClick = (event: MouseEvent)=> {
    setPage(page-1)
  }

  return (
    <div>
      <CardDisplay page={page} employees={DummyEmployees}/>
      <div className='oneLine'>
        <Typography display='flex'>Showing items 
          <Typography component='span' style={{fontWeight: 700}}>&nbsp;{page*10 + 1}-{page*10+10}&nbsp;</Typography>out of 
          <Typography component='span' style ={{fontWeight: 700}}>&nbsp;{DummyEmployees.length}&nbsp;</Typography> 
          entries</Typography>
        <div className='divLine'>
          <Button style={{fontSize: '16px', fontWeight: 700}} disabled={page === 0} onClick={handlePrevClick}>Previous</Button>
          <Typography style={{fontWeight: 700}}>{page+1}</Typography>
          <Button style={{fontSize:'16px', fontWeight: 700}} disabled={page === Math.floor(DummyEmployees.length/10)} onClick={handleNextClick}>Next</Button>
        </div>
      </div>
    </div>
  );
}



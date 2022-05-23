import Typography from '@mui/material/Typography';
import { MouseEvent, useState } from 'react';
import { Box, Button } from '@mui/material';
import '../App.css'
import { CardDisplay } from './CardDisplay';
import { Employee } from '../models';


type FullWidthGridProps = {
  employees: Employee[],
  delEmployee: (employeeId: number) => Promise<void>
  editEmployee: (employee: Employee) => Promise<void>
}

export default function FullWidthGrid({ employees, delEmployee, editEmployee }: FullWidthGridProps) {
  const [page, setPage] = useState(0)

  const handleNextClick =(event: MouseEvent) => {
    setPage(page+1)
  }
  const handlePrevClick = (event: MouseEvent)=> {
    setPage(page-1)
  }

  return (
    <div>
      <CardDisplay page={page} employees={employees} delEmployee={delEmployee} editEmployee={editEmployee}/>
      <div className='oneLine'>
        <Box sx={{display: 'flex'}}>
          <Typography sx={{display: {md: 'flex', xl: 'flex', l: 'flex', s:'flex',xs:'none'}}}>Showing items</Typography>
          <Typography sx={{fontWeight: 700, display: {md: 'flex', xl: 'flex', l: 'flex', s:'flex',  xs:'none'}}}>&nbsp;{page*10 + 1}-{employees.length < 10 ? employees.length : page*10+10 }&nbsp;</Typography>
          <Typography sx={{display: {md: 'flex', xl: 'flex', l: 'flex', s:'flex', xs:'none'}}}>out of</Typography>
          <Typography sx ={{fontWeight: 700, display: {md: 'flex', xl: 'flex', l: 'flex', s:'flex', xs:'none'}}}>&nbsp;{employees.length}&nbsp;</Typography> 
          <Typography sx={{display: {md: 'flex', xl: 'flex', l: 'flex', s:'flex', xs:'none'}}}>entries</Typography>
        </Box>
        <div className='divLine'>
          <Button sx={{fontSize: '16px', fontWeight: 700}} disabled={page === 0} onClick={handlePrevClick}>Previous</Button>
          <Typography sx={{fontWeight: 700}}>{page+1}</Typography>
          <Button sx={{fontSize:'16px', fontWeight: 700}} disabled={employees.length%10 === 0 ? true : page === Math.floor(employees.length/10)} onClick={handleNextClick}>Next</Button>
        </div>
      </div>
    </div>
  );
}



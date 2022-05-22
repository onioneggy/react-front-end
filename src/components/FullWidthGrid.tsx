// import { DummyEmployees } from '../employeesList';
import Typography from '@mui/material/Typography';
import { MouseEvent, useState } from 'react';
import { Button } from '@mui/material';
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
        <Typography display='flex'>Showing items 
          <Typography component='span' style={{fontWeight: 700}}>&nbsp;{page*10 + 1}-{page*10+10}&nbsp;</Typography>out of 
          <Typography component='span' style ={{fontWeight: 700}}>&nbsp;{employees.length}&nbsp;</Typography> 
          entries</Typography>
        <div className='divLine'>
          <Button style={{fontSize: '16px', fontWeight: 700}} disabled={page === 0} onClick={handlePrevClick}>Previous</Button>
          <Typography style={{fontWeight: 700}}>{page+1}</Typography>
          <Button style={{fontSize:'16px', fontWeight: 700}} disabled={page === Math.floor(employees.length/10)} onClick={handleNextClick}>Next</Button>
        </div>
      </div>
    </div>
  );
}



import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { DummyEmployees } from '../employeesList';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { MouseEvent, useState } from 'react';
import { Button } from '@mui/material';
import '../App.css'
import { Employee } from '../models';



const YellowButton = styled(IconButton)({
  color: '#FFC32E'
})

const RedButton = styled(IconButton)({
  color: '#E50000'
})

const StyledCard = styled(Card)({
  backgroundColor: '#EAEAEA',
  flexGrow: 1
});

type CardDisplayProps = {
  page: number,
  employees: Employee[]
}


const CardDisplay = ({page, employees}: CardDisplayProps) => {

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} mt={2}>
        {employees.slice(page*10, page*10+10).map((employee,i) => 
        <Grid container item xs={12} sm={6} key={i}>
        <StyledCard>
        <Grid container item wrap="nowrap" justifyContent="space-between">
          <Grid item container direction="column">
            <Grid item sx={{paddingLeft:'13px'}}key={i}>
              <Typography color='#365271' variant='h5' fontWeight={700}>{employee.name}</Typography>
              <Typography color='#365271'>{employee.department}</Typography>
              <Typography color='#365271'>{employee.salary}</Typography>
            </Grid>
          </Grid>
            <Grid item key={i} alignItems="center" display="flex">
              <YellowButton><EditIcon/></YellowButton>
              <RedButton><DeleteIcon/></RedButton>
            </Grid>
            </Grid>

        </StyledCard>
        </Grid>
        )}

        </Grid>
        </Container>
  )

}

export default function FullWidthGrid() {
  const employees = DummyEmployees
  const [page, setPage] = useState(0)
  const handleNextClick =(event: MouseEvent) => {
    setPage(page+1)
    console.log(page)
  }
  const handlePrevClick = (event: MouseEvent)=> {
    setPage(page-1)
  }
  
  console.log(employees)
  return (
    <div>
      <CardDisplay page={page} employees={employees}/>
      <div className='oneLine'>
        <Typography display='flex'>Showing items {page*10 + 1}-{page*10+10} out of {employees.length} entries</Typography>
        <div className='divLine'>
          <Button style={{fontSize: '16px', fontWeight: 700}} disabled={page === 0} onClick={handlePrevClick}>Previous</Button>
          <Typography style={{fontWeight: 700}}>{page+1}</Typography>
          <Button style={{fontSize:'16px', fontWeight: 700}} onClick={handleNextClick}>Next</Button>
        </div>
      </div>
    </div>
  );
}



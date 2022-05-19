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
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, TextField } from '@mui/material';
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
  flexGrow: 1,
  borderRadius: '3px',
});

type CardDisplayProps = {
  page: number,
  employees: Employee[]
}

  

const CardDisplay = ({page, employees}: CardDisplayProps) => {

  const [open, setOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)

  const handleDeleteOuter = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = (id: number) => {
    employees = employees.filter(employee => employee.id !== id)
    console.log(employees)
    setOpen(false)
    
  }

  const handleEditOpen = () => {
    setEditOpen(true)
  }

  const handleEditClose = () => {
    setEditOpen(false)
  }

  const handleEdit = () => {
    console.log('hello')
  }

  
  
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} mt={2}>
        {employees.slice(page*10, page*10+10).map(employee => 
        <Grid container item xs={12} sm={6} key={employee.id}>
        <StyledCard elevation={0}>
        <Grid container item wrap="nowrap" justifyContent="space-between">
          <Grid item container direction="column">
            <Grid item sx={{paddingLeft:'13px'}}key={employee.id}>
              <Typography color='#365271' variant='h5' fontWeight={700}>{employee.name}</Typography>
              <Typography color='#365271'>{employee.department}</Typography>
              <Typography color='#365271'>{employee.salary}</Typography>
            </Grid>
          </Grid>
            <Grid item key={employee.id} alignItems="center" display="flex">
              <YellowButton onClick={handleEditOpen}><EditIcon/></YellowButton>
              <RedButton onClick={handleDeleteOuter}><DeleteIcon/></RedButton>
              <Dialog onClose={handleClose} open={open}>
              <DialogTitle>
                {"Delete the following employee data?"}
              </DialogTitle>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={() => handleDelete(employee.id)} autoFocus>
                            Agree
                </Button>
                </DialogActions>
              </Dialog>
              <Dialog onClose={handleEditClose} open={editOpen}>
              <DialogTitle>
                {"Edit the following data"}
              </DialogTitle>
              <DialogContent>
                <TextField 
                autoFocus margin="dense" id="name" label="Name" type="name" fullWidth variant="standard" defaultValue={employee.name}/>
                <TextField autoFocus margin="dense" id="name" label="Salary" type="money" fullWidth variant="standard" defaultValue={employee.salary}/>
                <TextField autoFocus margin="dense" id="name" label="Department" type="text" fullWidth variant="standard" defaultValue={employee.department}/>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleEdit} autoFocus>
                            Agree
                </Button>
                </DialogActions>
              </Dialog>
              
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
  let employees = DummyEmployees
  const [page, setPage] = useState(0)

  const handleNextClick =(event: MouseEvent) => {
    setPage(page+1)
  }
  const handlePrevClick = (event: MouseEvent)=> {
    setPage(page-1)
  }

  return (
    <div>
      <CardDisplay page={page} employees={employees}/>
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



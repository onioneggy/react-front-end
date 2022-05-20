import { Button, Dialog, DialogTitle, 
    DialogActions, DialogContent, TextField, 
    styled, Card, IconButton, Typography,
    Container, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Employee } from '../models';
import { useState } from 'react';

type CardDisplayProps = {
    page: number,
    employees: Employee[],
    // delEmployee: (employeeId : number) => void,
    // editEmployee: (employee: Employee ) => void
  }
  
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
    
  
  export const CardDisplay = ({page, employees,}: CardDisplayProps) => {
  
    const [open, setOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    const [employee, setEmployee] = useState<Employee | null>(null)
    const [employeesCurr, setEmployees] = useState(employees)
  
    const handleDeleteOuter = (employee: Employee) => {
      setOpen(true)
      setEmployee(employee)
  
    }
  
    const handleClose = () => {
      setOpen(false)
    }
  
    const handleDelete = (id: number) => {
      employees = employeesCurr.filter(employee => employee.id !== id)
      setEmployees(employees)
      console.log(employeesCurr)
      setOpen(false)
      
    }
  
    const handleEditOpen = (employee: Employee) => {
      setEditOpen(true)
      setEmployee(employee)
    }
  
    const handleEditClose = () => {
      setEditOpen(false)
    }
  
    const handleEdit = () => {
        const id = employee?.id
        employees = employeesCurr.filter(emp => emp.id === id ? employee : emp )
        setEmployees(employees)
        console.log(employeesCurr)
        setEditOpen(false)
    }
  
    
    
    return (
      <Container maxWidth="lg">
        <Grid container spacing={2} mt={2}>
          {employeesCurr.slice(page*10, page*10+10).map(employee => 
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
                <YellowButton onClick={() => handleEditOpen(employee)}><EditIcon/></YellowButton>
                <RedButton onClick={() => handleDeleteOuter(employee)}><DeleteIcon/></RedButton>
                
              </Grid>
              </Grid>
  
          </StyledCard>
          </Grid>
          )}
  
        </Grid>
        {employee !== null && <Dialog onClose={handleClose} open={open}>
          <DialogTitle>
            {"Delete the following employee data?"}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={() => handleDelete(employee.id)} autoFocus>
                        Agree
            </Button>
            </DialogActions>
          </Dialog>}
          {employee !== null && <Dialog onClose={handleEditClose} open={editOpen}>
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
          </Dialog>}
      </Container>
    )
  
  }
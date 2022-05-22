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
    delEmployee: (employeeId : number) => Promise<void>,
    editEmployee: (employee: Employee ) => Promise<void>
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
    
  
  export const CardDisplay = ({page, employees, delEmployee, editEmployee}: CardDisplayProps) => {
  
    const [open, setOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    const [employee, setEmployee] = useState<Employee | null>(null)
  
    const handleDelete = (employee: Employee) => {
      setOpen(true)
      setEmployee(employee)
  
    }
  
    const handleEdit = (employee: Employee) => {
      setEditOpen(true)
      setEmployee(employee)
    }
  
    const handleEditDone = async (employee: Employee) => {
      await editEmployee(employee)
      setEditOpen(false)
    }

    const handleChange = (event: { target: { name: any; value: any }; }) => {
        const { name, value } = event.target
         employee !== null && setEmployee({
            ...employee,
            [name]: value
        
    })

    }

    const handleDelDone = async (id: number) => {
      await delEmployee(id)
      setOpen(false)
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
                <YellowButton onClick={() => handleEdit(employee)}><EditIcon/></YellowButton>
                <RedButton onClick={() => handleDelete(employee)}><DeleteIcon/></RedButton>
                
              </Grid>
              </Grid>
  
          </StyledCard>
          </Grid>
          )}
  
        </Grid>
        {employee !== null && <Dialog onClose={() => setOpen(false)} open={open}>
          <DialogTitle>
            {"Delete the following employee data?"}
          </DialogTitle>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => handleDelDone(employee.id)} autoFocus>
                        Delete
            </Button>
            </DialogActions>
          </Dialog>}
          {employee !== null && <Dialog onClose={() => setEditOpen(false)} open={editOpen}>
          <DialogTitle>
            {"Edit the following data"}
          </DialogTitle>
          <DialogContent>
            <TextField 
            autoFocus margin="dense" name="name" label="Name" type="name" fullWidth variant="standard" defaultValue={employee.name} onChange={handleChange}/>
            <TextField autoFocus margin="dense" name="salary" label="Salary" type="money" fullWidth variant="standard" defaultValue={employee.salary} onChange={handleChange}/>
            <TextField autoFocus margin="dense" name="department" label="Department" type="text" fullWidth variant="standard" defaultValue={employee.department} onChange={handleChange}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleEditDone(employee)} autoFocus>
                        Confirm
            </Button>
            </DialogActions>
          </Dialog>}
      </Container>
    )
  
  }
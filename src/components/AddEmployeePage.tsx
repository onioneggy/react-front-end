import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { CreateEmployeeData } from "../App";
import '../App.css'
import { useNavigate } from 'react-router';
import { Department } from "../models";
import { useSelector, useDispatch } from 'react-redux'
import { insertEmployee } from "../reducers/employee";
import { setSnackBar } from "../reducers/snackbar";
import axios from "axios";
import { RootState } from "..";

type EmployeeState = {
    name: string,
    salary: string,
    department: string
}

export default function AddEmployeePage() {
    const [error, setError] = useState('')
    const [employee, setEmployee] = useState<EmployeeState>({name: '', salary: '', department: ''})

    const employees = useSelector((state: RootState) => state.setEmployeeReducer.employees)
    const dispatch = useDispatch()

    const nav = useNavigate()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            const newEmployee: CreateEmployeeData = {
                name: employee.name,
                salary: Number(employee.salary),
                department: employee.department as Department
            }
            const employeeget = (await axios.post('http://localhost:3001/employee', newEmployee)).data
            dispatch(setSnackBar(true))          
            dispatch(insertEmployee(employeeget))
            nav('/', {replace: true})
            

        } catch(err: any) {
            setError(err.response.data.errorMessage)
        }
    }

    const handleChange = (event: { target: { name: any; value: any }; }) => {
        const { name, value } = event.target
         employee !== null && setEmployee({
            ...employee,
            [name]: value
        
    })

    }

    return (
        <Container>
        <Box component="form"
        sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }}} autoComplete="off" onSubmit={handleSubmit}>
            <TextField variant="standard"
                name="name"
                label="Employee Name" 
                onChange={handleChange} 
                error={(employee.name.length > 30 || employee.name.length < 4) || employee.name === '' || !employee.name.match("^[\\w\\-\\s]+$")
            }
                helperText="Must be between 4 to 30 characters"/>
            <TextField variant="standard"
                name="salary"
                label="Salary" 
                onChange={handleChange}
                error={Number(employee.salary) < 0}
                helperText="Salary must be a positive number"/>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="department">Department</InputLabel>
                <Select
                    name="department"
                    labelId="department"
                    value={employee.department}
                    onChange={handleChange}
                    label="department">
                    {Object.values(Department).map(department => <MenuItem key={department} value={department}>{department}</MenuItem>)}
                </Select>
            </FormControl>
            <Button sx={{m:3}} type="submit">SUBMIT</Button>
        </Box>

        <Typography color={'red'}>{error}</Typography>
        
        </Container>
    )

}


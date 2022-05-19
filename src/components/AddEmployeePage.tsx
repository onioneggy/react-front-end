import { Box, Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import '../App.css'
import { DummyEmployees } from "../employeesList";
import { Employee } from "../models";


type KeyChange = {
    target: { 
        value: string; 
        };
}

export default function AddEmployeePage() {
    const [employeeList, setEmployeeList]: any = useState(DummyEmployees)
    const [newName, setNewName] = useState('')
    const [newSalary, setNewSalary] = useState(0)
    const [newDepartment, setNewDepartment] = useState('')

    let lengthIndex = DummyEmployees.length

    const handleNameChange = (event: KeyChange ) => {
        setNewName(event.target.value)
        console.log(newName)
    }

    const handleSalaryChange = (event: any) => {
        setNewSalary(Number(event.target.value))
        console.log(newSalary)
    }

    const handleDepartmentChange = (event: KeyChange) => {
        setNewDepartment(event.target.value)
        console.log(newDepartment)
    }

    const handleSubmit= (event: any) => {
        event.preventDefault()
        const employee: Employee = {
            id: lengthIndex,
            name: newName,
            salary: newSalary,
            department: newDepartment
        }

        lengthIndex = lengthIndex+1

        setEmployeeList([...employeeList, employee])
        // DummyEmployees.push(employee)
        console.log(employeeList)
    }

    return (
        <Container>
        <Box component="form"
        sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }}} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField variant="standard" label="Employee Name" onChange={handleNameChange}/>
            <TextField variant="standard" label="Salary" onChange={handleSalaryChange}/>
            <TextField variant="standard" label="Department" onChange={handleDepartmentChange}/>
            <Button sx={{m:3}} type="submit">SUBMIT</Button>
        </Box>
        
        </Container>
    )

}
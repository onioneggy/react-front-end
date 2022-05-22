import React, { useEffect, useState } from 'react';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import Box from '@mui/material/Box';
import FullWidthGrid from './components/FullWidthGrid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEmployeePage from './components/AddEmployeePage';
import axios from 'axios';
import { Employee } from './models';



export type CreateEmployeeData = Omit<Employee, "id">

function App() {

  const [employees, setEmployees] = useState<Employee[]>([])

  useEffect(() => {
    axios
    .get('http://localhost:3001/employee')
    .then(res => {
      setEmployees(res.data)
      console.log(res.data)
    })
  }, [])


 const addEmployee = async (data: CreateEmployeeData) => {
    const employee: Employee = (await axios.post('http://localhost:3001/employee', data)).data
    setEmployees([...employees, employee])
  }

  const delEmployee = async (id: number) => {
    await axios.delete(`http://localhost:3001/employee/${id}`)
    setEmployees((employees).filter(employee => employee.id !== id))
    console.log('hi')
  }

  const editEmployee = async (employee: Employee) => { 
    console.log(employee.id)
    const updateData = {
      name : employee.name,
      salary: employee.salary,
      department: employee.department
    }
    await axios.put(`http://localhost:3001/employee/${employee.id}`, updateData)
    setEmployees(employees.map(emp => emp.id !== employee.id ? emp : employee))
  }

  return (
    <BrowserRouter>
      <Box>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<FullWidthGrid employees={employees} delEmployee={delEmployee} editEmployee={editEmployee}/>}></Route>
          <Route path="/create" element={<AddEmployeePage addEmployee={addEmployee}/>}></Route>
        </Routes>
      </Box>
    </BrowserRouter>

    
  );
}

export default App;

import React, { useEffect } from 'react';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import Box from '@mui/material/Box';
import FullWidthGrid from './components/FullWidthGrid';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import AddEmployeePage from './components/AddEmployeePage';
import axios from 'axios';
import { Employee } from './models';
import { useDispatch } from 'react-redux'
import { setEmployees } from './reducers/employee';
import SimpleSnackbar from './components/Snackbar';
import { LoginPage } from './components/Login';
import { CreateAccPage } from './components/CreateAcc';


export type CreateEmployeeData = Omit<Employee, "id">

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    axios
    .get('http://localhost:3001/employee', { headers : { 'token': localStorage.getItem('token') || "" } })
    .then(res => {
      console.log(res.data)
      dispatch(setEmployees(res.data))
    })
  }, [dispatch])

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element= { (localStorage.getItem('token') === "") ?
          <Navigate to="/login" replace={true}/> :
            <Box>
              <ButtonAppBar />
              <SimpleSnackbar/>
              <FullWidthGrid/>
            </Box> }/>
          <Route path="/create" element={
            <Box>
              <ButtonAppBar />
              <SimpleSnackbar/>
              <AddEmployeePage/>
            </Box>}>
            </Route>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<CreateAccPage/>}/>
        </Routes>
    </BrowserRouter>

    
  );
}

export default App;

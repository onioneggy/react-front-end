import React, { useEffect } from 'react';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import Box from '@mui/material/Box';
import FullWidthGrid from './components/FullWidthGrid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEmployeePage from './components/AddEmployeePage';
import axios from 'axios';
import { Employee } from './models';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux'
import { setEmployees } from './reducers/employee';
import { RootState } from '.';
import SimpleSnackbar from './components/Snackbar';
import { LoginPage } from './components/Login';
import { CreateAccPage } from './components/CreateAcc';


// const newTheme = createTheme({
//   typography: {
//     fontFamily: 'roboto'
//   }
// })

export type CreateEmployeeData = Omit<Employee, "id">

function App() {
  const dispatch = useDispatch()

  const employees = useSelector((state: RootState) => state.setEmployeeReducer.employees)

  useEffect(() => {
    axios
    .get('http://localhost:3001/employee')
    .then(res => {
      console.log(res.data)
      dispatch(setEmployees(res.data))
    })
  }, [dispatch])

  return (
    <BrowserRouter>
    {/* <ThemeProvider theme ={newTheme}> */}
        <Routes>
          <Route path="/" element={
            <Box>
              <ButtonAppBar />
              <SimpleSnackbar/>
              <FullWidthGrid/>
            </Box>}>
          </Route>
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
      {/* </ThemeProvider> */}
    </BrowserRouter>

    
  );
}

export default App;

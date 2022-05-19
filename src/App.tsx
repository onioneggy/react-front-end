import React from 'react';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import Box from '@mui/material/Box';
import FullWidthGrid from './components/FullWidthGrid';
// import Toolbar from '@mui/material/Toolbar';
import { createTheme } from '@mui/material/styles'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEmployeePage from './components/AddEmployeePage';

const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#365271'
    }
  }
})


function App() {
  return (
    <BrowserRouter>
      <Box>
        <ButtonAppBar/>
        <Routes>
          <Route path="/" element={<FullWidthGrid/>}></Route>
          <Route path="/create" element={<AddEmployeePage/>}></Route>
        </Routes>
      </Box>
    </BrowserRouter>

    
  );
}

export default App;

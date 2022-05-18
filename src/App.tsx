import React from 'react';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import Box from '@mui/material/Box';
import FullWidthGrid from './components/FullWidthGrid';
// import Toolbar from '@mui/material/Toolbar';
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/styles';

const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#365271'
    }
  }
})


function App() {
  return (
    <Box>
      {/* <ThemeProvider theme={mainTheme}> */}
      <ButtonAppBar/>
      <FullWidthGrid/>
      {/* </ThemeProvider> */}
    </Box>


    
  );
}

export default App;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { styled } from '@mui/system';
import AddEmployeeButton from './AddEmployeeButton';
import { useNavigate } from 'react-router';


const TextStyle = styled(Typography)({
    fontSize: '30px',
    margin: 0,
    fontWeight: 700,
    display: 'flex',
    flexGrow: 1,
    WebkitTextStroke: '1px black',
})

export default function ButtonAppBar() {
  const nav = useNavigate()
  return (
    <AppBar sx = {{background: '#365271'}} position='relative'>
        <Toolbar>
            <TextStyle>Employees</TextStyle>
            <AddEmployeeButton onClick={() => nav("/create", {replace: true})}
                variant="contained" startIcon={<AddCircleRoundedIcon />}>
                Add Employee
            </AddEmployeeButton>
        </Toolbar>
    </AppBar>
  );
}
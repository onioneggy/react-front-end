import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { styled } from '@mui/system';

const TextStyle = styled(Typography)({
    fontSize: '30px',
    margin: 0,
    fontWeight: 700,
    display: 'flex',
    flexGrow: 1,
    WebkitTextStroke: '1px black',
})

const AddEmployeeButton = styled(Button)({
    background: '#34933B',
    fontWeight: 700,
    borderRadius:0,
    fontSize: '16px'
})

export default function ButtonAppBar() {
  return (
    <AppBar sx = {{background: '#365271'}} position='relative'>
        <Toolbar>
            <TextStyle>Employees</TextStyle>
            <AddEmployeeButton
                variant="contained" startIcon={<AddCircleRoundedIcon />}>
                Add Employee
            </AddEmployeeButton>
        </Toolbar>
    </AppBar>
  );
}
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { styled } from '@mui/system';
import AddEmployeeButton from './AddEmployeeButton';
import { useNavigate } from 'react-router';
import { Stack, IconButton } from '@mui/material';


const SmallButton= styled(IconButton)({
  color: 'white'
})

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
  const logout = () => {
    localStorage.removeItem('token')
      nav('/login', {replace:true})
  }
  
  return (
    <AppBar sx = {{background: '#365271'}} elevation= {0}  position='relative'>
        <Toolbar>
            <TextStyle onClick={() => nav("/", {replace: true})}>Employees</TextStyle>
            <Stack spacing={2} direction="row">
              <AddEmployeeButton sx={{display: {xs: 'none', md:'flex' }}}onClick={() => nav("/create", {replace: true})}
                  variant="contained" startIcon={<AddCircleRoundedIcon />}>
                  Add Employee
              </AddEmployeeButton>
              <SmallButton sx={{display: {xs: 'flex', md:'none'}}} onClick={() => nav("/create", {replace: true})}>
                <AddCircleRoundedIcon/>
              </SmallButton>
              <AddEmployeeButton sx={{display: 'flex'}}variant="contained" onClick={logout}>Logout</AddEmployeeButton>
            </Stack>
        </Toolbar>
    </AppBar>
  );
}
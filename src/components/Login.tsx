import { Box, Button, Container, InputAdornment, TextField, Typography } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import { User } from "../reducers/login";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


export const LoginPage = () => {
    const nav = useNavigate()

    // const user = useSelector((state: RootState) => state.userDataReducer.userData as User)
    const [singleUser, setSingleUser] = useState<User>({username: '', password: ''})

    const handleChange = (event: { target: { name: any; value: any }; }) => {
        const { name, value } = event.target
        setSingleUser({
            ...singleUser,
            [name]: value  
    })
    }

    const handleLogin = async () => {
        try {
            const responseData = await (await axios.post(`http://localhost:3001/user/login`, singleUser)).data
            localStorage.setItem('token', responseData.token)
            nav("/", {replace: true})
        } catch (err: any) {
            alert(err.response.data.errorMessage)
        }
        
    }

    return (
        <Container sx ={{alignItems: 'center', justifyContent: 'center', display: 'flex', textAlign: 'center'}}>
            <Box component="form" sx={{width: '25%', '& .MuiTextField-root': { m: 1, width: '25ch' }, marginTop: '30px', }}>
                    <Typography variant="h6">Log in</Typography>
                    <TextField 
                        name="username"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircleIcon />
                                </InputAdornment>
                            )}}
                        label="Username"
                        onChange={handleChange}
                        ></TextField>
                    <TextField
                        name="password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PasswordIcon/>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <VisibilityIcon/>
                                </InputAdornment>
                            )}} 
                    label="Password"
                    onChange={handleChange}></TextField>
                    <Button onClick={handleLogin}>Sign in</Button>
                    <Button onClick={() => nav("/signup", {replace: true})}>Create New Account</Button>
                </Box>
        </Container>
    )

}
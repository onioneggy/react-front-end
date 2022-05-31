import { Box, Button, Container, InputAdornment, TextField, Typography } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import { useSelector } from "react-redux";
import { RootState } from "..";
import { User } from "../reducers/login";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
import axios from "axios";



export const CreateAccPage = () => {

    const user = useSelector((state: RootState) => state.userDataReducer.userData as User)
    const [singleUser, setSingleUser] = useState<User>({username: '', password: ''})

    const handleChange = (event: { target: { name: any; value: any }; }) => {
        const { name, value } = event.target
        setSingleUser({
            ...singleUser,
            [name]: value  
    })
    }

    const handleSubmit = async () => {
        await axios.post(`http://localhost:3001/user/signup`, singleUser)
    }

    return (
        <Container sx ={{alignItems: 'center', justifyContent: 'center', display: 'flex', textAlign: 'center'}}>
            <Box component="form" sx={{width: '25%', '& .MuiTextField-root': { m: 1, width: '25ch' }, marginTop: '30px', }}>
                    <Typography variant="h6">Create Account</Typography>
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
                    <Button onClick={handleSubmit}>Submit</Button>
                </Box>
        </Container>
    )

}
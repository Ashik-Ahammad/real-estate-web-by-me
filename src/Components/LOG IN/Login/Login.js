import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import './Login.css'
import { NavLink } from 'react-router-dom';
import loginImg from '../../../images/login.jpg';



const loginBg = {
    background: `url(${loginImg})`
}


const Login = () => {
    return (
        <Container style={loginBg}>
            <Grid container spacing={2} sx={{ py: 25 }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" color="navy" gutterBottom>
                        <i class="fas fa-user-circle"></i>  Login
                    </Typography>

                    <Button sx={{ width: '62%', m: 1, color: 'navy', background: "white" }} type="submit" variant="contained" >
                        SIGN IN WITH GOOGLE
                    </Button>

                    <Typography sx={{ color: 'navy' }}>OR</Typography>

                    <form >

                        <TextField
                            sx={{ width: '62%', m: 1 }}
                            id="standard-basic" label="Email"
                            name="email"

                            required
                            variant="standard" />
                        <br />
                        <TextField
                            sx={{ width: '62%', m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name="password"

                            autoComplete="current-password"
                            variant="standard"
                            required
                        />

                        <Button sx={{ width: '62%', m: 1, background: "white", color: 'navy' }} type="submit" variant="contained">
                            LOGIN &nbsp;<i class="fas fa-sign-in-alt"></i>
                        </Button>
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button sx={{ color: 'navy' }} variant="text">New user? Please Register</Button>
                        </NavLink>
                    </form>
                </Grid>

                <Grid item xs={12} md={6}>
                    <i class="fas fa-address-card banner-login"></i>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
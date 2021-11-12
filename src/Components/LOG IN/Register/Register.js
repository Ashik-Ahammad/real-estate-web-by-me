import React, { useState } from 'react';
import { Button, CircularProgress, Container, Grid, TextField, Typography, Alert } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import loginImg from '../../../images/login.jpg';
import registerImg from '../../../images/register.png';
import useAuth from '../../../Hooks/useAuth';

const loginBg = {
    background: `url(${loginImg})`
}

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match!!');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <Container style={loginBg}>
            <Grid container sx={{ py: 25 }} spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={registerImg}
                        width="100px" alt="" />
                    <Typography variant="body1" color="red" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '62%', m: 1 }}
                            id="standard-basic" label="Name"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                            required
                            variant="standard" />
                        <br />

                        <TextField
                            sx={{ width: '62%', m: 1 }}
                            id="standard-basic" label="Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            required
                            variant="standard" />
                        <br />
                        <TextField
                            sx={{ width: '62%', m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            autoComplete="current-password"
                            variant="standard"
                            required
                        />
                        <TextField
                            sx={{ width: '62%', m: 1 }}
                            id="standard-password-input"
                            label="Retype-password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            autoComplete="current-password"
                            variant="standard"
                            required
                        />

                        <Button sx={{ width: '62%', m: 1 }} type="submit" variant="contained">
                            SIGN UP
                        </Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />
                    }{user?.email && <Alert severity="success">Congrats Successfully Registered</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>

                <Grid item xs={12} md={6}>
                    <i class="fas fa-address-card banner-login"></i>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
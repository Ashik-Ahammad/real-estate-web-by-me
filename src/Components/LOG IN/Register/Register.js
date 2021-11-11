import React from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import loginImg from '../../../images/login.jpg';
import registerImg from '../../../images/register.png';

const loginBg = {
    background: `url(${loginImg})`
}

const Register = () => {
    return (
        <Container style={loginBg}>
            <Grid container sx={{ py: 25 }} spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={registerImg}
                        width="100px" alt="" />
                    <Typography variant="body1" color="red" gutterBottom>
                        Register
                    </Typography>
                    <form>

                        <TextField
                            sx={{ width: '62%', m: 1 }}
                            id="standard-basic" label="Email"
                            name="email"
                            type="email"

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
                        <TextField
                            sx={{ width: '62%', m: 1 }}
                            id="standard-password-input"
                            label="Re-Password"
                            type="password"
                            name="password2"

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
                    </form>
                </Grid>

                <Grid item xs={12} md={6}>
                    <i class="fas fa-address-card banner-login"></i>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
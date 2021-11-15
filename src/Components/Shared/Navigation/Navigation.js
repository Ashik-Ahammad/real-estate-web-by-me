import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css'

const Navigation = () => {

    const { user, logOut } = useAuth();

    return (
        <div>
            <Box sx={{ flexGrow: 1 }} className="uptext">
                <AppBar position="static" sx={{ background: '#212121' }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="uptext">
                            UNITED PROPERTY
                        </Typography>


                        {
                            user?.email ?
                                <Box >
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                        <Button color="inherit" className="uptext">Dashboard</Button>
                                    </NavLink>
                                    <Button onClick={logOut} color="inherit" className="uptext">Log out &nbsp;<i class="fas fa-sign-out-alt"></i></Button>
                                </Box>

                                :
                                <NavLink style={{ textDecoration: 'none' }} to="/login">
                                    <Button sx={{ color: 'white' }} className="uptext"><i class="fas fa-sign-in-alt"></i> Login</Button>
                                </NavLink>
                        }

                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navigation;
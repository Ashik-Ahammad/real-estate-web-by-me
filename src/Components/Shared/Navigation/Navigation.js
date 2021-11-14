import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {

    const { user, logOut } = useAuth();

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            UNITED PROPERTY
                        </Typography>


                        {
                            user?.email ?
                                <Box>
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                        <Button color="inherit">Dashboard</Button>
                                    </NavLink>
                                    <Button onClick={logOut} color="inherit">Log out</Button>
                                </Box>

                                :
                                <NavLink style={{ textDecoration: 'none' }} to="/login">
                                    <Button color="inherit">Login</Button>
                                </NavLink>
                        }

                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navigation;
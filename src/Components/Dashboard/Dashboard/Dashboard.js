import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import logoD from '../../../images/logo.png'

import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddApartment from '../AddApartment/AddApartment';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../LOG IN/AdminRoute/AdminRoute';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div >
            <Toolbar style={{ background: '#212121' }}>
                <img style={{ width: '150px', background: 'lightgray' }} src={logoD} alt="" />
            </Toolbar>
            <Divider />
            <Link style={{ textDecoration: 'none', color: 'black', width: '100%' }} to="/home"><Button color="inherit">GO BACK HOME</Button></Link>

            <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}`}><Button color="inherit">DASHBOARD HOME</Button></Link>

            {admin && <Box>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/makeAdmin`}><Button color="inherit">MAKE AN ADMIN</Button></Link>

                <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/addApartment`}><Button color="inherit">ADD APARTMENT</Button></Link>
            </Box>}



        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    background: '#212121',
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        D A S H B O A R D
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addApartment`}>
                        <AddApartment></AddApartment>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box >
    );
}

Dashboard.propTypes = {

    window: PropTypes.func,
};

export default Dashboard;

import React from 'react';
import { Button, Grid } from '@mui/material';
import './Banner.css';
import banner from '../../../images/banner.jpg'
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <Grid container spacing={2} sx={{ mt: 5, py: 10 }}>
            <Grid item sx={{ mt: 1 }} xs={12} md={6}>
                <div>
                    <h1 >
                        <i class="fas fa-home home"></i>
                        <span>U</span>
                        <span>N</span>
                        <span>I</span>
                        <span>T</span>
                        <span>E</span>
                        <span>D</span>
                        <br />
                        <span>P</span>
                        <span>R</span>
                        <span>O</span>
                        <span>P</span>
                        <span>E</span>
                        <span>R</span>
                        <span>T</span>
                        <span>Y</span>
                    </h1>
                </div>
            </Grid>

            <Grid item xs={12} md={6}>
                <img style={{ width: '90%' }} src={banner} alt="Banner" />
                <NavLink style={{ textDecoration: 'none' }} to="/allProducts">
                    <Button color="secondary" >EXPLORE MORE</Button>
                </NavLink>
            </Grid>
        </Grid>
    );
};

export default Banner;
import { Grid } from '@mui/material';
import React from 'react';
import ReviewPost from '../../Home/ReviewSection/ReviewPost/ReviewPost';
import Bookings from '../Bookings/Bookings';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} sm={12}>
                <ReviewPost></ReviewPost>
            </Grid>

            <Grid item xs={12} md={6} sm={12}>
                <Bookings></Bookings>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;
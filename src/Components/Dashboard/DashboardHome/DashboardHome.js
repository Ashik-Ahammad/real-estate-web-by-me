import { Grid } from '@mui/material';
import React from 'react';
import ReviewPost from '../../Home/ReviewSection/ReviewPost/ReviewPost';
import Bookings from '../Bookings/Bookings';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={8} md={6} sm={6}>
                <ReviewPost></ReviewPost>
            </Grid>

            <Grid item xs={8} md={4} sm={4}>
                <Bookings></Bookings>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;
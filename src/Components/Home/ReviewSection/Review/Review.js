import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Review = ({ review }) => {
    const { name, email, details, rating } = review;
    return (
        <div >
            <Grid item xs={6} sm={6} md={8} style={{ marginLeft: '10px' }}>
                <Paper elevation={0} style={{ background: 'transparent' }} >
                    <Typography sx={{ color: 'navy' }}>
                        {name}
                    </Typography>
                    <Typography>
                        {email}
                    </Typography>
                    <Typography sx={{ color: 'green' }}>
                        {details}
                    </Typography>
                    <Typography style={{ color: 'orange' }}>
                        {rating} <i class="fas fa-star"></i>
                    </Typography>

                </Paper>
            </Grid>
        </div>
    );
};

export default Review;
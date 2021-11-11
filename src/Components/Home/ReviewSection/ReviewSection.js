import { Grid } from '@mui/material';
import React from 'react';
import './ReviewSection.css'
import logoF from '../../../images/logo.png';


const ReviewSection = () => {
    return (
        <div class="reviewS">
            <hr />
            <h4>Reviews</h4>
            <Grid item xs>
                <img src={logoF} alt="" />
            </Grid>
            <hr />

        </div>
    );
};

export default ReviewSection;
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './ReviewSection.css'
import logoF from '../../../images/logo.png';
import Review from './Review/Review';


const ReviewSection = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://pacific-basin-32376.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);


    return (
        <div class="reviewS">

            <h4>Reviews</h4>

            <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </Grid>

        </div>
    );
};

export default ReviewSection;
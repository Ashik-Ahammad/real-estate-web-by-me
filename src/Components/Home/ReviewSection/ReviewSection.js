import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './ReviewSection.css'
import Review from './Review/Review';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const ReviewSection = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://pacific-basin-32376.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);


    return (
        <Box sx={{ flexGrow: 1 }} class="reviewS">

            <Container>

                <Typography sx={{ fontWeight: 600, m: 3 }} variant="h5" component="div">
                    REVIEWS
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default ReviewSection;
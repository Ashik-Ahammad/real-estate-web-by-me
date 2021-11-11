import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import ReviewSection from '../ReviewSection/ReviewSection';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;
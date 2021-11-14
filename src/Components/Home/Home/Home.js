import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import ReviewSection from '../ReviewSection/ReviewSection';
import Footer from '../../../Components/Shared/Footer/Footer';
import CarouselApp from '../../CarouselApp/CarouselApp';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <ReviewSection></ReviewSection>
            <CarouselApp></CarouselApp>
            <Footer></Footer>
        </div>
    );
};

export default Home;
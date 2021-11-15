import React from 'react';
import ReviewPost from '../../Home/ReviewSection/ReviewPost/ReviewPost';
import Bookings from '../Bookings/Bookings';

const DashboardHome = () => {
    return (

        <div container style={{ margin: '80px' }}>
            <div>
                <ReviewPost></ReviewPost>
            </div>
            <div >
                <Bookings></Bookings>
            </div>
        </div>

    );
};

export default DashboardHome;
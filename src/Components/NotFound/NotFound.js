import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import notF from '../../images/404.png';

const NotFound = () => {
    return (
        <div>
            <img src={notF} alt="" />
            <br />
            <Link style={{ textDecoration: 'none' }} to="/home">
                <Button variant="outlined">Go back to home</Button>
            </Link>
        </div >
    );
};

export default NotFound;
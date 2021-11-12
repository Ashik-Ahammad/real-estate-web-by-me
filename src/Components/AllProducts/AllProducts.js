import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import AllProduct from '../AllProduct/AllProduct';
import './AllProducts.css';


const AllProducts = () => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('https://pacific-basin-32376.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])


    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Container>

                    <Typography sx={{ fontWeight: 600, m: 3 }} variant="h4" component="div">
                        RENT APARTMENT
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            allProducts.map(allProduct => <AllProduct
                                key={allProduct._id}
                                allProduct={allProduct}
                            ></AllProduct>)
                        }
                    </Grid>
                </Container>
            </Box>

        </div>
    );
};

export default AllProducts;
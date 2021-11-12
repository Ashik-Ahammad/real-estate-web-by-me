import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Product from '../Product/Product';


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://pacific-basin-32376.herokuapp.com/homeProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
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
                            products.map(product => <Product
                                key={product._id}
                                product={product}
                            ></Product>)
                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Products;
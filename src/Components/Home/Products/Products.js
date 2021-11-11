import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import apartment1 from '../../../images/ap (1).jpg';
import apartment2 from '../../../images/ap (2).jpg';
import apartment3 from '../../../images/ap (3).jpg';
import apartment4 from '../../../images/ap (4).jpg';
import apartment5 from '../../../images/ap (5).jpg';
import apartment6 from '../../../images/ap (6).jpg';
import Product from '../Product/Product';


const products = [
    {
        name: 'Apartment1',
        description: 'Each apartment is a separate room or set of rooms for people to live in. Sometimes an apartment will only be one small room, and tenants will have to share other rooms like the bathroom and kitchen.',
        address: '100 Oaks,California',
        img: apartment1
    },
    {
        name: 'Apartment2',
        description: 'Each apartment is a separate room or set of rooms for people to live in. Sometimes an apartment will only be one small room, and tenants will have to share other rooms like the bathroom and kitchen.',
        address: '100 Oaks,California',
        img: apartment2
    },
    {
        name: 'Apartment3',
        description: 'Each apartment is a separate room or set of rooms for people to live in. Sometimes an apartment will only be one small room, and tenants will have to share other rooms like the bathroom and kitchen.',
        address: '100 Oaks,California',
        img: apartment3
    },
    {
        name: 'Apartment4',
        description: 'Each apartment is a separate room or set of rooms for people to live in. Sometimes an apartment will only be one small room, and tenants will have to share other rooms like the bathroom and kitchen.',
        address: '100 Oaks,California',
        img: apartment4
    },
    {
        name: 'Apartment5',
        description: 'Each apartment is a separate room or set of rooms for people to live in. Sometimes an apartment will only be one small room, and tenants will have to share other rooms like the bathroom and kitchen.',
        address: '100 Oaks,California',
        img: apartment5
    },
    {
        name: 'Apartment6',
        description: 'Each apartment is a separate room or set of rooms for people to live in. Sometimes an apartment will only be one small room, and tenants will have to share other rooms like the bathroom and kitchen.',
        address: '100 Oaks,California',
        img: apartment6
    }
]



const Products = () => {
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
                                key={product.name}
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
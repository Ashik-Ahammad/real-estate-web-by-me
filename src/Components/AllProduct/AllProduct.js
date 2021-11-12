import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import AllProductModal from '../AllProductModal/AllProductModal';

const AllProduct = ({ allProduct }) => {

    const { name, description, img, address } = allProduct;

    const [openAllProduct, setOpenAllProduct] = React.useState(false);
    const handleAllProductOpen = () => setOpenAllProduct(true);
    const handleAllProductClose = () => setOpenAllProduct(false);


    return (
        <>
            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ minWidth: 275, p: 2, boxShadow: 3 }}  >
                    <CardMedia
                        component="img"
                        height="140"
                        sx={{ borderRadius: 1 }}
                        style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                        image={img}
                        alt=""
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'info.main' }} component="div">
                            {address}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Button onClick={handleAllProductOpen} sx={{ mt: 2 }} variant="contained">View for Details</Button>
                    </CardContent>

                </Card>
            </Grid >
            <AllProductModal
                allProduct={allProduct}
                openAllProduct={openAllProduct}
                handleAllProductClose={handleAllProductClose}
            ></AllProductModal>
        </>
    );
};

export default AllProduct;
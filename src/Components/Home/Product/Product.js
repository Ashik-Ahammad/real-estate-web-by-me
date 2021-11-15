import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import './Product.css'
import ProductModal from '../../ProductModal/ProductModal';

const Product = ({ product, setBookingSuccess }) => {
    const { name, details, img, address } = product;

    const [openProduct, setOpenProduct] = React.useState(false);
    const handleProductOpen = () => setOpenProduct(true);
    const handleProductClose = () => setOpenProduct(false);

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
                            {details}
                        </Typography>
                        <Button style={{ background: '#212121' }} onClick={handleProductOpen} sx={{ mt: 2 }} variant="contained">View for Details</Button>


                    </CardContent>

                </Card>
            </Grid >
            <ProductModal
                product={product}
                openProduct={openProduct}
                handleProductClose={handleProductClose}
                setBookingSuccess={setBookingSuccess}
            >
            </ProductModal>
        </>
    );
};

export default Product;
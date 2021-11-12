import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'lightblue',
    boxShadow: 24,
    p: 4,
};


const ProductModal = ({ openProduct, handleProductClose, product }) => {

    const { name, address, description, price, details } = product;
    const { user } = useAuth();

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openProduct}
            onClose={handleProductClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openProduct} >
                <Box sx={style} >
                    <Typography id="transition-modal-title" variant="h6" component="h2">

                        {name}
                        <br />
                        <span style={{ color: 'indigo' }}>{address}</span>
                        <br />
                        <h6 style={{ color: 'gray' }}>"{description}"</h6>
                        <br />
                        {details}
                        <br />
                        <span style={{ color: 'red' }}>{price}</span>
                    </Typography>
                    <TextField
                        sx={{ width: '75%' }}
                        id="outlined-read-only-input"
                        defaultValue={user.email}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <NavLink style={{ textDecoration: 'none' }} to="/purchase">
                        <Button color="secondary">PURCHA$E NOW</Button>
                    </NavLink>
                </Box>
            </Fade>
        </Modal>
    );
};

export default ProductModal;
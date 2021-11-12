import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AllProductModal = ({ openAllProduct, handleAllProductClose, allProduct }) => {

    const { name, address } = allProduct;

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openAllProduct}
            onClose={handleAllProductClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openAllProduct}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                        <br />
                        {address}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        Buy Apartment
                    </Typography>
                    <NavLink to="/purchase" style={{ textDecoration: 'none' }}>
                        <Button color="secondary">PURCHASE NOW</Button>
                    </NavLink>
                </Box>
            </Fade>
        </Modal>
    );
};

export default AllProductModal;
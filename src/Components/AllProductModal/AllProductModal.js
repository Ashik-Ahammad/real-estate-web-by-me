import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useAuth from '../../Hooks/useAuth';
import { TextField } from '@mui/material';

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

const AllProductModal = ({ openAllProduct, handleAllProductClose, allProduct, setBookingSuccess }) => {

    const { name, address, price, details } = allProduct;
    const { user } = useAuth();
    const initialInfo = { email: user.email, phone: '' }

    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo, name, price, address };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        const bookingAp = {
            ...bookingInfo,

        }

        fetch('https://pacific-basin-32376.herokuapp.com/purchaseList', {
            method: 'POST',
            headers: {
                'content-type': 'application.json'
            },
            body: JSON.stringify(bookingAp)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true)

                    handleAllProductClose();
                }
            })

        e.preventDefault();
    }

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
                <Box sx={style} >
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>

                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="address"
                            defaultValue={address}
                            size="small"
                        />

                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="details"
                            defaultValue={details}
                            size="small"
                        />

                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            placeholder="Email"
                            size="small"
                            required
                        />

                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            placeholder="Phone Number"
                            size="small"
                            required
                        />

                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-read-only-input"
                            name="price"
                            defaultValue={price}
                            InputProps={{
                                readOnly: true,
                            }}

                        />

                        <Button type="submit" color="secondary">BOOK NOW</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default AllProductModal;
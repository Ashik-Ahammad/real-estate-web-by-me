import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Bookings = () => {
    const { user } = useAuth();

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const url = `https://pacific-basin-32376.herokuapp.com/purchaseList?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])

    return (
        <div>
            <h2>Your Apartment Booking : {bookings.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="BOOKING LIST">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Apartment Name</TableCell>
                            <TableCell align="left">ID&nbsp;</TableCell>
                            <TableCell align="left">Address&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bookings.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.apartmentName}</TableCell>

                                <TableCell align="right">{row._id}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Bookings;
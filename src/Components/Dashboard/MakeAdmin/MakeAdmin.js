import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './MakeAdmin.css'

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }


    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://pacific-basin-32376.herokuapp.com/user/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <h2 className="admintText">MAKE AN ADMIN &nbsp;<i class="fas fa-user-shield"></i></h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '40%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    required
                    variant="standard" />
                <br />
                <Button style={{ marginTop: '10px' }} type="submit" className="adminBtn">Make Admin &nbsp; <i class="fas fa-user-shield"></i></Button>
            </form>
            {success && <Alert severity="success">Making Admin  successfull!</Alert>}
        </div>
    );
};

export default MakeAdmin;
import { Box, Container, Paper, TextField, Button } from '@mui/material';
import React, { useState } from 'react';

const UserInput = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const handleCreateUser = () => {

        // send name and email to database
        fetch('http://localhost:3000/products/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name, email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('User created successfully')
                }
            });
        setName('');
        setEmail('');
    }
    return (
        <Container>
            <Box>
                <Paper
                    elevation={2}
                    sx={{
                        width: '50%',
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <TextField
                        variant='outlined'
                        label='Name'
                        sx={{ my: 2, mx: 3 }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        variant='outlined'
                        label='Email'
                        sx={{ my: 2, mx: 3 }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Button
                        variant='contained'
                        sx={{ my: 2, mx: 3 }}
                        onClick={handleCreateUser}
                    >
                        Create User</Button>
                </Paper>
            </Box>
        </Container>
    );
};

export default UserInput;
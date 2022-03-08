import { Box, Container, Paper, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleCreateUser = () => {

        if (firstName && lastName && username && password) {
            fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ firstName, lastName, username, password })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.message) {
                        alert('User created successfully!')
                    }
                    history.push('/login')
                    console.log(data);
                    setFirstName('');
                    setLastName('');
                    setUserName('');
                    setPassword('');
                });
        } else {
            return;
        }

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
                        label='First Name'
                        sx={{ my: 2, mx: 3 }}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <TextField
                        variant='outlined'
                        label='Last Name'
                        sx={{ my: 2, mx: 3 }}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    <TextField
                        variant='outlined'
                        label='User Name'
                        sx={{ my: 2, mx: 3 }}
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />

                    <TextField
                        type='password'
                        variant='outlined'
                        label='Password'
                        sx={{ my: 2, mx: 3 }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        variant='contained'
                        sx={{ my: 2, mx: 3 }}
                        onClick={handleCreateUser}
                    >
                        Register as a New User</Button>
                </Paper>
            </Box>
        </Container>
    );
};

export default Register;
import { Box, Container, Paper, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ setLoggedIn }) => {
    const history = useHistory();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {

        if (username && password) {
            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.message) {
                        alert('You have logged in successfully!')
                        window.localStorage.setItem('token', JSON.stringify({ token: data.token, user: username }));
                        setLoggedIn(true);
                        history.push('/users');

                    }
                    console.log(data);
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
                        onClick={handleLogin}
                    >
                        Login</Button>
                </Paper>
            </Box>
        </Container>
    );
};

export default Login;
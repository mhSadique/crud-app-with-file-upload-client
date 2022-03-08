import { Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/features/users/usersSlice';
import UserSingle from './TestUserSingle';

const UsersCollection = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/products/users/')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <Container sx={{
            mt: 4
        }}>
            <Paper elevation={4}>
                <Typography
                    component='h3'
                    variant='h4'
                    sx={{

                    }}
                >
                    Users Collection
                </Typography>
                <Grid
                    container
                    sx={{
                        gap: 5,
                        width: '100%',
                        p: 3

                    }}
                >
                    {users.map(user => <UserSingle key={user._id} user={user} />)}
                </Grid>
            </Paper>
        </Container>
    );
};

export default UsersCollection;
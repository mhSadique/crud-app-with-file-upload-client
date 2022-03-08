import { Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useGetTokenLocalStorage from '../hooks/useGetTokenLocalStorage';
import UserSingle from './UserSingle';

const UsersCollection = () => {
    const { token } = useGetTokenLocalStorage();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/users', {
            method: 'GET',
            headers: {
                // 'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            });
    }, [token]);

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
                    {users.length ?
                        users.map(user => <UserSingle key={user._id} user={user} />) :
                        'Found No Users'}
                </Grid>
            </Paper>
        </Container>
    );
};

export default UsersCollection;
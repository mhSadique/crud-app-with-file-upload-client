import { Modal, Box, TextField, Button, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useGetTokenLocalStorage from '../hooks/useGetTokenLocalStorage';

const UserDetailModal = ({ modalOpen, onClose, user, setModalOpen }) => {

    const { token } = useGetTokenLocalStorage();
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/users/single?username=${user.username}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data[0]);
                setUserInfo(data[0]);
            });
    }, [token, user.username]);


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
    return (
        <Modal
            open={modalOpen}
            onClose={onClose}
        >
            <Box
                sx={style}
            >
                <Paper
                    elevation={2}
                    sx={{
                        width: '100%',
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Typography component='div' variant='h5' sx={{ p: 2 }}>
                        First Name : {userInfo.firstName}
                    </Typography>

                    <Typography component='div' variant='h5' sx={{ p: 2 }}>
                        Last Name : {userInfo.lastName}
                    </Typography>

                    <Typography component='div' variant='h5' sx={{ p: 2 }}>
                        User Name : {userInfo.username}
                    </Typography>
                </Paper>
            </Box>
        </Modal>
    );
};

export default UserDetailModal;
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import UserDetailModal from './UserDetailModal';

const UserSingle = ({ user }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    const onOpenModal = () => {
        handleModalOpen();
    };

    return (
        <Grid item
            sx={{
                flexGrow: 1,
                flexBasis: '33.333%'
            }}
        >
            <Card>
                <CardContent>
                    <Typography
                        component='div'
                        variant='h5'
                    >
                        {user.firstName + " " + user.lastName}
                    </Typography>
                    <Typography
                        component='div'
                        variant='h6'
                    >
                        {user.username}
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Button
                        variant='contained'
                        color='success'
                        size='small'
                        onClick={onOpenModal}
                    >
                        See Details
                    </Button>
                    <UserDetailModal
                        modalOpen={modalOpen}
                        onClose={handleModalClose}
                        user={user}
                        setModalOpen={setModalOpen}
                    />
                </CardActions>
            </Card>
        </Grid>
    );
};

export default UserSingle;
import { Button, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Link
} from "react-router-dom";

const Title = ({ setLoggedIn, loggedIn }) => {
    const history = useHistory();
    const btnStyle = {
        fontSize: 22,
        backgroundColor: 'white',
        mx: 1
    };
    return (
        <div style={{ marginBottom: '30px' }}>
            <Typography component='h1' variant='h4' sx={{ pt: 3, pb: 2 }}>
                Sweet CRUD System
            </Typography>
            {loggedIn && <>
                <Button
                    onClick={() => {
                        history.push('/users');
                    }}
                    sx={btnStyle}
                >
                    See All Users
                </Button>
                <Button
                    onClick={() => {
                        history.push('/create-product');
                    }}
                    sx={btnStyle}
                >
                    Create a New Product
                </Button>
                <Button
                    onClick={() => {
                        history.push('/products');
                    }}
                    sx={btnStyle}
                >
                    See All Products
                </Button>
                <Button
                    onClick={() => {
                        window.localStorage.clear();
                        setLoggedIn(false);
                        history.push('/login')
                    }}
                    sx={btnStyle}
                >
                    Log out
                </Button>
            </>}
            {!loggedIn && <><Button
                onClick={() => {
                    history.push('/register');
                }}
                sx={btnStyle}
            >
                Register
            </Button>
                <Button
                    onClick={() => {
                        history.push('/login');
                    }}
                    sx={btnStyle}
                >
                    Login
                </Button>
            </>}
        </div>
    );
};

export default Title;
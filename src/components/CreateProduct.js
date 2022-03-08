import { Box, Container, Paper, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import useGetTokenLocalStorage from '../hooks/useGetTokenLocalStorage';

const CreateProduct = () => {
    const { token, user } = useGetTokenLocalStorage();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const handleCreateProduct = () => {
        if (name && description && quantity && price) {
            fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ name, description, quantity, price, _createdBy: user })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.message) {
                        alert('Product created successfully!')
                    }
                    console.log(data);
                    setName('');
                    setDescription('');
                    setQuantity('');
                    setPrice('');
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
                        label='Product Name'
                        sx={{ my: 2, mx: 3 }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        variant='outlined'
                        label='Product Description'
                        sx={{ my: 2, mx: 3 }}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <TextField
                        variant='outlined'
                        label='Quantity'
                        sx={{ my: 2, mx: 3 }}
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />

                    <TextField
                        type='text'
                        variant='outlined'
                        label='Price'
                        sx={{ my: 2, mx: 3 }}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <Button
                        variant='contained'
                        sx={{ my: 2, mx: 3 }}
                        onClick={handleCreateProduct}
                    >
                        Create a New Product</Button>
                </Paper>
            </Box>
        </Container>
    );
};

export default CreateProduct;
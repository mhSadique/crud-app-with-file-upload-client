import { Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useGetTokenLocalStorage from '../hooks/useGetTokenLocalStorage';
import ProductSingle from './ProductSingle';

const ProductCollection = () => {
    const { token } = useGetTokenLocalStorage();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/products', {
            method: 'GET',
            headers: {
                // 'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            });
    }, [token]);

    return (
        <Container sx={{
            mt: 4
        }}>

            <Paper elevation={4} sx={{ p: 3 }}>
                <Typography
                    component='h3'
                    variant='h3'
                >
                    Products Collection ({products.length})
                </Typography>
                <Grid
                    container
                    sx={{
                        gap: 5,
                        width: '100%',
                        p: 3

                    }}
                >
                    {products.length ?
                        products.map(product => <ProductSingle key={product._id} product={product} />) :
                        'Found No Users'}
                </Grid>
            </Paper>
        </Container>
    );
};

export default ProductCollection;
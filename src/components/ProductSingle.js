import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

const ProductSingle = ({ product }) => {
    console.log(product);

    return (
        <Grid item
            sx={{
                flexGrow: 1,
                flexBasis: '33.333%'
            }}
        >
            <Card elevation={5} sx={{ p: 2, textAlign: 'left' }}>
                <Typography
                    component='div'
                    variant='h4'
                >
                    Name: {product.name}
                </Typography>
                <Typography
                    component='div'
                    variant='h6'
                >
                    Price: {product.price}
                </Typography>
                <Typography
                    component='div'
                    variant='h6'
                >
                    Quantity: {product.quantity}
                </Typography>
                <Typography
                    component='div'
                    variant='h6'
                >
                    Description: {product.description}
                </Typography>
                <Typography
                    component='div'
                    variant='h6'
                >
                    Created By: {product._createdBy}
                </Typography>
            </Card>
        </Grid>
    );
};

export default ProductSingle;
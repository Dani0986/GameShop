/* eslint-disable react/prop-types */
// components/ProductCard.jsx
/* eslint-disable no-unused-vars */ 
import React from "react";
/* eslint-enable no-unused-vars */
// components/ProductCard.jsx

import { useContext } from "react";

import { Card, CardContent, CardMedia, Typography, CardActions, Button, CardActionArea } from "@mui/material";
import { ProductContext } from '../context/productContext';

// Componente para renderizar la tarjeta del producto
const ProductCard = ({ product }) => {
  const { añadir } = useContext(ProductContext);

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        transition: "0.3s ease-in-out",
        "&:hover": { boxShadow: "0 5px 15px rgba(0,0,0,0.2)" },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product?.images?.[0]?.url}
          alt={product.name}
          sx={{
            objectFit: "cover",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="h6" component="div" sx={{ paddingTop: "8px" }}>
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing sx={{ justifyContent: "flex-end" }}>
        <Button variant="contained" color="primary" onClick={() => añadir(product)}>
          Añadir al carrito
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;


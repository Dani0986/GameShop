/* eslint-disable react/prop-types */
// components/ProductCard.jsx

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  CardActionArea,
} from "@mui/material";

// Componente para renderizar la tarjeta del producto
const ProductCard = ({ product }) => {
  // Verifica si el objeto product está definido y tiene las propiedades necesarias
  if (!product || !product.name || !product.description || !product.price || !product.images) {
    console.error("Producto no válido:", product);
    return null;
  }

  const handleAddToCart = () => {
    console.log(`Producto añadido: ${product.name}`);
    // Aquí puedes agregar la lógica para añadir el producto al carrito
  };

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
        {/* Imagen del producto */}
        <CardMedia
          component="img"
          height="200"
          image={product.images[0]?.url}
          alt={product.name}
          sx={{
            objectFit: "cover",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        />
        <CardContent>
          {/* Nombre del producto */}
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {product.name}
          </Typography>
          {/* Descripción del producto */}
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          {/* Precio del producto */}
          <Typography variant="h6" component="div" sx={{ paddingTop: "8px" }}>
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing sx={{ justifyContent: "flex-end" }}>
        {/* Botón para añadir al carrito */}
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: "20px" }}
          onClick={handleAddToCart}
        >
          Añadir al carrito
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

import React from "react";
import { List, Typography, Box, ListItem, ListItemText, Button } from "@mui/material";
import { useCart } from "../context/cartContext"; // Asegúrate de que la ruta sea correcta

const Cart = () => {
  const { basket, dispatch } = useCart();
  console.log("basket", basket);

  const handleRemoveProduct = (productId) => {
    dispatch({ type: "remove", item: { id: productId } });
  };

  return (
    <Box sx={{ width: 320, p: 2 }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Carrito de Compras
      </Typography>
      <List>
        {basket.map((item, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={item.name}
              secondary={`Cantidad: ${item.cantidad} ud, Precio: $${item.price}`}
            />
            <Button onClick={() => handleRemoveProduct(item.id)}>Eliminar</Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Cart;

/*import React from "react";
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

export default Cart;*/


import { List, Typography, Box } from "@mui/material";

// Componente funcional Cart
// eslint-disable-next-line react/prop-types
const Cart = () => {
  // Utilizamos el contexto del carrito

  // Función para manejar la eliminación de un ítem del carrito
  return (
    <Box sx={{ width: 320, p: 2 }}>
      {/* Título del carrito */}
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Carrito de Compras
      </Typography>
      <List>
        {/* Mapeamos los ítems del carrito para mostrarlos */}

        {/* Mostramos el botón de "Proceder al Pago" si hay ítems en el carrito */}
      </List>
    </Box>
  );
};

export default Cart;
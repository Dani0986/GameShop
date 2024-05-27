import React, { useContext } from 'react';
import { List, Typography, Box, ListItem, ListItemText, Button } from '@mui/material';
import { ProductContext } from '../context/productContext';

const Cart = () => {
  const context = useContext(ProductContext);
console.log(context);

  return (
    <Box sx={{ width: 320, p: 2 }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Carrito de Compras
      </Typography>
      <List>
        {context.cart.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.name} secondary={`$${item.price}`} />
          </ListItem>
        ))}
      </List>
      {context.cart.length > 0 && (
        <Button variant="contained" color="primary" fullWidth>
          Proceder al Pago
        </Button>
      )}
    </Box>
  );
};

export default Cart;

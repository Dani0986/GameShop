import { List, Typography, Box, ListItem, ListItemText, Button } from "@mui/material";


import {useCart} from "../cart/index";



// Componente funcional Cart
// eslint-disable-next-line react/prop-types
const Cart = () => {
  // Utilizamos el contexto del carrito
  const {basket, dispatch} = useCart();
  console.log("basket", basket);

   // Función para manejar la eliminación de un ítem del carrito
  const handleRemoveProduct = (product) => {
    dispatch({ type: 'remove', item: { id: product } })};
 
  return (
    <Box sx={{ width: 320, p: 2 }}>
      {/* Título del carrito */}
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Carrito de Compras
      </Typography>
      <List>
        {/* Mapeamos los ítems del carrito para mostrarlos */}
          {/* basket es un array con los productos del carrito,
          que son objetos con varias claves de las que tendre que sacar el name 
          es decir con el mapeo saco los productos con su nombre y su precio*/}
          {basket.map((item,index)=>(
                  <ListItem key={index}>
                    <ListItemText primary={item.name} secondary={`Cantidad: ${item.cantidad} ud, Precio: $${item.price}`} />
                       <button onClick={()=>handleRemoveProduct(item.id) }>Eliminar</button>       
                    </ListItem>
          )
        )}
        {/* TEngo que sacar las unidades que he metido en el carrito
        de cada uno de los productos */}


        {/* Mostramos el botón de "Proceder al Pago" si hay ítems en el carrito */}
      </List>
    </Box>
  );
};

export default Cart;
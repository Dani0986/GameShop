import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartMenu = ({ items, onClose, removeItem }) => {
  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  return (
    <Drawer anchor="right" open={true} onClose={onClose}>
      <List sx={{ width: 300, padding: "20px" }}>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", marginBottom: "10px" }}
        >
          Carrito de compras
        </Typography>
        <Divider />
        {items.length === 0 ? (
          <ListItem>
            <ListItemText primary="No hay items en el carrito" />
          </ListItem>
        ) : (
          items.map((item) => (
            <ListItem key={item.id}>
              <ListItemAvatar>
                <Avatar alt={item.name} src={item.image} />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={`Precio: ${item.score} Euros`}
              />
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleRemoveItem(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))
        )}
      </List>
    </Drawer>
  );
};

export default CartMenu;



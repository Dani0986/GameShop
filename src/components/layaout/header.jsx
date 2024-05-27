// components/Header.jsx

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  TextField,
  Drawer,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search"
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from '../cart/cart';

const Header = () => {
  // Estado para controlar la apertura y cierre del carrito
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Función para manejar el input de búsqueda
  const handleSearchInput = (event) => {
    const query = event.target.value;
    console.log(query); // Aquí puedes manejar la lógica de búsqueda
  };

  // Función para togglear el carrito
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Función para manejar clic en el botón de ejemplo
  const handleButtonClick = () => {
    console.log("¡Botón clickeado!");
    // Aquí puedes agregar lógica adicional al hacer clic en el botón
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* Botón del menú */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SearchIcon/>
            <MenuIcon />
          </IconButton>

          {/* Título de la tienda */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mi Tienda
          </Typography>

          {/* Botón de ejemplo */}
          <Button color="inherit" onClick={handleButtonClick}>
            Ejemplo
          </Button>

          {/* Barra de búsqueda */}
          <TextField
            id="search-bar"
            className="text"
            onChange={handleSearchInput}
            label="Buscar productos"
            variant="outlined"
            placeholder="Buscar..."
            size="small"
            margin="normal"
            sx={{ backgroundColor: "white", borderRadius: 1, mr: 2 }}
          />

          {/* Icono de cuenta de usuario */}
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>

          {/* Icono del carrito de compras */}
          <IconButton color="inherit" onClick={toggleCart}>
            <Badge badgeContent={4} color="secondary">
              {" "}
              {/* Dinamiza esta cantidad según el estado del carrito */}
              <ShoppingCartIcon className="shake-animation" />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer para el carrito */}
      <Drawer anchor="right" open={isCartOpen} onClose={toggleCart}>
        <Cart closeCart={toggleCart} />
      </Drawer>
    </>
  );
};

export default Header;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartMenu from '../../cart/CartMenu'; // Asegúrate de que la ruta sea correcta
import { useCart } from '../../context/cartContext';

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.2em',
    marginLeft: '20px',
  },
};

const Navbar = () => {
  const { cartItems, removeItem } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartClick = () => {
    setCartOpen(!cartOpen);
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };

  return (
    <nav style={styles.navbar}>
      <div>
        <Link to="/" style={styles.link}>Inicio</Link>
        <Link to="/games" style={styles.link}>Juegos</Link>
      </div>
      <div>
        <IconButton onClick={handleCartClick} style={{ color: 'white' }}>
          <ShoppingCartIcon />
        </IconButton>
        {cartOpen && <CartMenu items={cartItems} onClose={handleCloseCart} removeItem={removeItem} />}
        {/* Mostrar el número de elementos en el carrito */}
        <span style={{ color: 'white', marginLeft: '5px' }}>{cartItems.length}</span>
      </div>
    </nav>
  );
};

export default Navbar;


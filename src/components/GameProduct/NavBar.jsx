import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Importar AccountCircleIcon
import CartMenu from '../../cart/CartMenu'; // Asegúrate de que la ruta sea correcta
import { useCart } from '../../context/cartContext';
import { useAuth } from '../../Hooks/useAuth'; // Importar useAuth

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
  loggedInIcon: {
    color: 'green', // Color verde cuando el usuario está autenticado
  },
};

const Navbar = () => {
  const { cartItems, removeItem } = useCart();
  const { user, logout } = useAuth();
  const [cartOpen, setCartOpen] = React.useState(false);

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
        {user ? (
          <>
            <IconButton style={styles.loggedInIcon}>
              <AccountCircleIcon />
            </IconButton>
            <IconButton onClick={logout} style={{ color: 'white' }}>
              Cerrar sesión
            </IconButton>
          </>
        ) : (
          <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
            <IconButton style={{ color: 'white' }}>
              <AccountCircleIcon />
            </IconButton>
          </Link>
        )}

        <IconButton onClick={handleCartClick} style={{ color: 'white' }}>
          <ShoppingCartIcon />
        </IconButton>
        {cartOpen && <CartMenu items={cartItems} onClose={handleCloseCart} removeItem={removeItem} />}
        <span style={{ color: 'white', marginLeft: '5px' }}>{cartItems.length}</span>
      </div>
    </nav>
  );
};

export default Navbar;
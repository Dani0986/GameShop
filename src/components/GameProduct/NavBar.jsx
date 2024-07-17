import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CartMenu from '../../cart/CartMenu';
import { useCart } from '../../context/cartContext';
import { useAuth } from '../../Hooks/useAuth';
import axios from 'axios'; // Importar Axios para hacer solicitudes HTTP
import GameCard from '../GameProduct/GameCard'; // Importar GameCard desde su ubicación correcta

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#A70084',
    color: 'white',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.2em',
    marginLeft: '20px',
  },
  loggedInIcon: {
    color: 'green',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginRight: '10px',
    padding: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '5px 10px',
    backgroundColor: 'grey',
    border: 'none',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  authButtons: {
    display: 'flex',
    alignItems: 'center',
  },
  username: {
    marginLeft: '10px',
    fontSize: '1.2em',
  },
  searchInput: {
    padding: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginLeft: '20px',
  },
  gameCardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '20px',
    padding: '0 20px',
  },
};

const Navbar = () => {
  const { cartItems, removeItem } = useCart();
  const { user, logout, login } = useAuth();
  const [cartOpen, setCartOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [games, setGames] = useState([]); // Estado para almacenar juegos
  const [loading, setLoading] = useState(false); // Estado para indicar si está cargando
  const [searchResults, setSearchResults] = useState([]); // Estado para almacenar los resultados de búsqueda
  const navigate = useNavigate();

  useEffect(() => {
    // Función para obtener todos los juegos al cargar la página
    axios.get('http://localhost:8080/api/v1/games/getAll')
      .then(response => {
        setGames(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching games:', error);
        setLoading(false);
      });
  }, []); // Se ejecuta solo una vez al cargar el componente

  const handleCartClick = () => {
    setCartOpen(!cartOpen);
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setErrorMessage(err.response ? err.response.data.message : 'Error desconocido');
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8080/api/v1/games/getAll');
      const filteredGames = response.data.filter(game => game.name.toLowerCase().includes(searchQuery.toLowerCase()));

      setSearchResults(filteredGames); // Almacenar los resultados de búsqueda
      setLoading(false);
    } catch (error) {
      console.error('Error searching games:', error);
      setLoading(false);
    }
  };

  const clearSearchResults = () => {
    setSearchResults([]);
    setSearchQuery('');
  };

  return (
    <>
      <nav style={styles.navbar}>
        <div>
          <Link to="/" style={styles.link}>Inicio</Link>
          <Link to="/games" style={styles.link}>Juegos</Link>
        </div>
        <div style={styles.authButtons}>
          {user ? (
            <>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                style={styles.loggedInIcon}
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={logout}>Cerrar sesión</MenuItem>
              </Menu>
              <span style={styles.username}>{user.name}</span>
            </>
          ) : (
            <>
              <form onSubmit={handleSubmit} style={styles.form}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.input}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={styles.input}
                  required
                />
                <button type="submit" style={styles.button}>
                  Login
                </button>
                {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
              </form>
            </>
          )}
          <IconButton onClick={handleCartClick} style={{ color: 'white', marginLeft: '20px' }}>
            <ShoppingCartIcon />
          </IconButton>
          {cartOpen && <CartMenu items={cartItems} onClose={handleCloseCart} removeItem={removeItem} />}
          <span style={{ color: 'white', marginLeft: '5px' }}>{cartItems.length}</span>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
          <button type="button" onClick={handleSearch} style={{ ...styles.button, marginLeft: '10px' }}>
            Buscar
          </button>
          {searchResults.length > 0 && (
            <button type="button" onClick={clearSearchResults} style={{ ...styles.button, marginLeft: '10px' }}>
              Limpiar búsqueda
            </button>
          )}
        </div>
      </nav>

      {searchResults.length > 0 && (
        <div style={styles.gameCardsContainer}>
          {searchResults.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;

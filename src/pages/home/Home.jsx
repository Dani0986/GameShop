// src/components/Home.js
import React from 'react';
import { LoginPage } from '../LoginPage';
import { useLocalStorage } from '../../Hooks/useLocalStorage';

const styles = {
  home: {
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5em',
  },
  description: {
    fontSize: '1.2em',
    marginTop: '20px',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={styles.home}>
      <h1 style={styles.title}>Bienvenido a la Tienda de Videojuegos</h1>
      <p style={styles.description}>
        Explora nuestra amplia colección de videojuegos y encuentra tu próximo favorito.
      </p>

      {isLoggedIn ? (
        <div>
          <p>¡Has iniciado sesión!</p>
          <button style={styles.button} onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <LoginPage onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default Home;





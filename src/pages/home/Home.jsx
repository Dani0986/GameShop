import React from 'react';
import { RegistroPage } from '../RegistroPage';
import { LoginPage } from '../LoginPage';

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
};

export const Home = () => {
  return (
    <div style={styles.home}>
      <h1 style={styles.title}>Bienvenido a la Tienda de Videojuegos</h1>
      <p style={styles.description}>
        Explora nuestra amplia colección de videojuegos y encuentra tu próximo favorito.
      </p>
      <RegistroPage />
      <LoginPage />
    </div>
  );
};

export default Home;



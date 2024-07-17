import React from 'react';

const styles = {
  home: {
    padding: '20px',
    textAlign: 'center',
    minHeight: '100vh',
    position: 'relative',
    backgroundImage: `url('https://res.cloudinary.com/duhbskepz/image/upload/v1710064906/BackEnd/frh4xov2tnqkqk8svmyl.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    backgroundAttachment: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Color de texto predeterminado
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay oscuro semi-transparente
  },
  content: {
    zIndex: 1,
    position: 'relative', // Ajustamos la posición relativa para que esté por encima del overlay
    padding: '20px',
  },
  title: {
    fontSize: '3.5em',
    marginTop: '-160px',
    padding: '20px',
    background: 'rgba(0, 0, 0, 0.7)', // Fondo oscuro semi-transparente para el título
    borderRadius: '4px',
  },
  description: {
    fontSize: '1.8em',
    marginTop: '20px',
    marginBottom: '20px',
    padding: '15px',
    background: 'rgba(0, 0, 0, 0.7)', // Fondo oscuro semi-transparente para la descripción
    borderRadius: '4px',
  },
  button: {
    marginTop: '460px',
    padding: '30px 30px', // Aumentar el padding para hacer un botón grande
    backgroundColor: '#A70084', // Color de fondo gris
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.2em', // Tamaño de fuente más grande
    cursor: 'pointer',
    textDecoration: 'none',
  },
};

export const Home = () => {
  const handleRegisterClick = () => {
    // Redirigir a la página de registro usando programación imperativa
    // Esto es opcional y puedes usar <Link to="/register"> en su lugar
    window.location.href = '/register';
  };

  return (
    <div style={styles.home}>
      <h1 style={styles.title}>Bienvenido a la Tienda GameShopNeoland</h1>
      <p style={styles.description}>
        Explora nuestra amplia colección de videojuegos y encuentra tu próximo favorito.
      </p>
      <button style={styles.button} onClick={handleRegisterClick}>
        No tienes cuenta? Registrarse
      </button>
    </div>
  );
};

export default Home;

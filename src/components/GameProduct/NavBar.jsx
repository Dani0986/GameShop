import React from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <nav style={styles.navbar}>
      <div>
        <Link to="/" style={styles.link}>Inicio</Link>
        <Link to="/games" style={styles.link}>Juegos</Link>
      </div>
    </nav>
  );
};

export default Navbar;

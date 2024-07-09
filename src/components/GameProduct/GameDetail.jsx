
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const styles = {
  gameList: {
    padding: '20px',
  },
  title: {
    fontSize: '2em',
  },
  gameItem: {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ccc',
  },
};

const GameList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/games/getAll')
      .then(response => {
        setGames(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching games:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (games.length === 0) return <div>No hay juegos disponibles</div>;

  return (
    <div style={styles.gameList}>
      <h1 style={styles.title}>Lista de Juegos</h1>
      {games.map(game => (
        <div key={game._id} style={styles.gameItem}>
          <h2>{game.title}</h2>
          <p>{game.description}</p>
          <Link to={`/games/${game._id}`}>Ver detalles</Link>
        </div>
      ))}
    </div>
  );
};

export default GameList;

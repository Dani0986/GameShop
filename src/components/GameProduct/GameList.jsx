


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameCard from '../../components/GameProduct/GameCard'; // Asegúrate de que la ruta sea correcta

const styles = {
  gameList: {
    padding: '20px',
    backgroundColor: 'lightgray',
  },
  gameItemContainer: {
    marginBottom: '20px',
    padding: '10px',
    display: 'flex',
    alignItems: 'flex-start', // Alinear al inicio para ajustar las descripciones
  },
  gameItem: {
    flex: 1, // La tarjeta ocupará todo el espacio disponible
    marginRight: '20px', // Espacio entre la tarjeta y la descripción
  },
  comment: {
    flexShrink: 0, // Evitar que la descripción se expanda
    maxWidth: '400px', // Ancho máximo para la descripción
    marginLeft: '20px', // Ajuste el espaciado como desee
    color: '#000000', // Color opcional para el texto adicionalho máximo para la descripción
  },
};

export const GameList = ({ addToCart }) => {
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
      <h1>Lista de Videojuegos</h1>
      {games.map(game => (
        <div key={game._id} style={styles.gameItemContainer}>
          <div style={styles.gameItem}>
            <GameCard game={game} addToCart={addToCart} /> 
          </div>
          <div style={styles.comment}>
            <p>Este Juego es increible: {game.name}</p>
            
            {/* Aquí puedes agregar cualquier otro texto adicional que desees */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameList;


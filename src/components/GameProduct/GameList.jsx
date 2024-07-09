import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from '../../context/GameContext';
import GameCard from '../../components/GameProduct/GameCard'; // Asegúrate de que la ruta sea correcta

const styles = {
  gameList: {
    padding: '20px',
    backgroundColor: 'lightgray',
  },
  gameItem: {
    margin: '10px 0',
    listStyle: 'none',
    borderBottom: '1px solid gray',
    padding: '10px',
  },
};

const games = [
  {
    _id: 1,
    name: "Juego 1",
    price: 29.99,
    year: 2020,
    image: "https://via.placeholder.com/200",
    characters: ["1", "2"], // IDs de los personajes
  },
  {
    _id: 2,
    name: "Juego 2",
    price: 39.99,
    year: 2021,
    image: "https://via.placeholder.com/200",
    characters: ["3", "4"], // IDs de los personajes
  },
  // otros juegos
];
const GameList = () => {
  const { games } = useContext(GameContext);

  return (
    <div style={styles.gameList}>
      <h1>Lista de Videojuegos</h1>
      <ul>
        {games.map(game => (
          <li key={game._id} style={styles.gameItem}>
            {/* Renderiza el componente GameCard en lugar de un enlace */}
            <GameCard game={game} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;


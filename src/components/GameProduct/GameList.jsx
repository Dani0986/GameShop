import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from '../../context/GameContext';
import  GameCard  from "../../components/GameProduct/GameCard"; // Importa el componente GameCard

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

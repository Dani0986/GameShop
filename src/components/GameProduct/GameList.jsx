import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import GameCard from '../../components/GameProduct/GameCard'; // Asegúrate de que la ruta sea correcta
import { ComentariosContext } from '../../context/ComentariosContext'; // Asegúrate de que la ruta sea correcta

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
    color: '#000000', // Color opcional para el texto adicional
  },
};

const GameList = ({ addToCart }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const { comentarios, dispatch } = useContext(ComentariosContext);

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

  // Función para agregar un comentario a un juego específico
  const agregarComentario = (juegoId, comentario) => {
    dispatch({ type: 'AGREGAR_COMENTARIO', payload: { juegoId, comentario } });
  };

  // Función para borrar un comentario de un juego específico
  const borrarComentario = (juegoId, comentarioIndex) => {
    dispatch({ type: 'BORRAR_COMENTARIO', payload: { juegoId, comentarioIndex } });
  };

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
            <p>Este Juego es increíble: {game.name}</p>
            <h3>Comentarios</h3>
            <ul>
              {comentarios
                .filter(comentario => comentario.juegoId === game._id)
                .map((comentario, index) => (
                  <li key={index}>
                    <p>{comentario.comentario}</p>
                    <button onClick={() => borrarComentario(game._id, index)}>Borrar Comentario</button>
                  </li>
                ))}
            </ul>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const textoComentario = e.target.elements.textoComentario.value;
                agregarComentario(game._id, textoComentario);
                e.target.reset();
              }}
            >
              <input type="text" name="textoComentario" placeholder="Añadir comentario" />
              <button type="submit">Añadir</button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameList;




/*
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
            
            {/* Aquí puedes agregar cualquier otro texto adicional que desees }
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameList;
*/

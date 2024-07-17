import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import GameCard from '../../components/GameProduct/GameCard'; // Asegúrate de que la ruta sea correcta
import { ComentariosContext } from '../../context/ComentariosContext'; // Asegúrate de que la ruta sea correcta
import { useAuth } from '../../Hooks/useAuth'; // Importa el contexto de autenticación

const styles = {
  gameList: {
    padding: '20px',
    backgroundColor: 'lightgray',
  },
  gameItemContainer: {
    marginBottom: '25px',
    padding: '20px',
    width: '100%', // Ancho del contenedor principal
    maxWidth: '60%', // Máximo ancho del contenedor
    display: 'flex',
    alignItems: 'flex-start', // Alinear al inicio para ajustar las descripciones
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra suave
    margin: '0 auto',
  },
  gameItem: {
    flex: 1, // La tarjeta ocupará todo el espacio disponible
    marginRight: '20px',
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
  const { user } = useAuth(); // Obtener estado de autenticación y funciones relacionadas desde useAuth

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
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Lista de Videojuegos</h1>
      {games.map(game => (
        <div key={game._id} style={styles.gameItemContainer}>
          <div style={styles.gameItem}>
            <GameCard game={game} addToCart={addToCart} user={user} />
          </div>
          <div style={styles.comment}>
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'purple' }}>
              Comprar Juego: <span style={{ fontSize: '25px', fontWeight: 'bold', color: 'black'}}>{game.name}</span>
            </p>
            <h3 style={{ marginTop: '10px' }}>Comentarios</h3>
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

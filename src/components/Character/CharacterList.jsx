import React, { useContext } from 'react';
import { CharactersContext } from '../../context/CharacterContext';

const CharacterList = () => {
  const characters = useContext(CharactersContext);

  // Manejar el estado de carga o errores si es necesario
  if (!characters) {
    return <p>Cargando personajes...</p>; // O cualquier otro indicador de carga
  }

  return (
    <div>
      <h2>Listado de Personajes</h2>
      <ul>
        {characters.map((character) => (
          <li key={character._id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;

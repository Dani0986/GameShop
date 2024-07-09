import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const obtenerCharacters = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/character/getAll');
        setCharacters(response.data);
      } catch (error) {
        console.error('Error al obtener personajes:', error);
      }
    };

    obtenerCharacters();
  }, []);

  return (
    <CharactersContext.Provider value={characters}>
      {children}
    </CharactersContext.Provider>
  );
};

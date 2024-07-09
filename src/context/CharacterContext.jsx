// characters/CharactersContext.js
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// Creamos el contexto
export const CharactersContext = createContext();

// Proveedor de contexto para los personajes
export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  // Función para obtener los personajes desde la API
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/character/getAll');
        setCharacters(response.data);
      } catch (error) {
        console.error('Error al obtener personajes:', error);
      }
    };

    fetchCharacters();
  }, []);

  // Proporcionamos los personajes a través del contexto
  return (
    <CharactersContext.Provider value={characters}>
      {children}
    </CharactersContext.Provider>
  );
};

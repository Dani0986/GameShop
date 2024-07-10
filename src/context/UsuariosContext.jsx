import React, { createContext, useEffect, useState, useContext } from 'react';
import axios from 'axios';

// Crear el contexto de Usuarios
export const UsuariosContext = createContext();

// Componente Proveedor de Usuarios
export const UsuariosProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);

  // Obtener la lista de usuarios al montar el componente
  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/user/getAll');
        setUsuarios(response.data);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    obtenerUsuarios();
  }, []);

  return (
    <UsuariosContext.Provider value={usuarios}>
      {children}
    </UsuariosContext.Provider>
  );
};

export default UsuariosProvider;
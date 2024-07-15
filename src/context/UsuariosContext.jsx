import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// Crear el contexto de Usuarios
export const UsuariosContext = createContext();

// Componente Proveedor de Usuarios
export const UsuariosProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Obtener la lista de usuarios al montar el componente
  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/api/v1/user/getAll');
        setUsuarios(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error al obtener usuarios');
        console.error('Error al obtener usuarios:', error);
        setLoading(false);
      }
    };

    obtenerUsuarios();
  }, []);

  // Función para registrar un nuevo usuario
  const registrarUsuario = async (datosUsuario) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8080/api/v1/user/registerLargo', datosUsuario);
      setUsuarios((prevUsuarios) => [...prevUsuarios, response.data]);
      setLoading(false);
    } catch (error) {
      setError('Error al registrar usuario');
      console.error('Error al registrar usuario:', error);
      setLoading(false);
    }
  };

  return (
    <UsuariosContext.Provider value={{ usuarios, registrarUsuario, loading, error }}>
      {children}
    </UsuariosContext.Provider>
  );
};

export default UsuariosProvider;

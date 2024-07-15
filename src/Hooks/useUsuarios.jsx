import { useContext } from 'react';
import { UsuariosContext } from '../context/UsuariosContext'; // Asegúrate de especificar la ruta correcta
import { useState, useEffect } from 'react';
import axios from 'axios';
/*xport const useUsuarios = () => {
  return useContext(UsuariosContext);
};*/

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/user/getAll'); // Asegúrate de que esta URL sea correcta
        setUsuarios(response.data);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    };

    fetchUsuarios();
  }, []);

  const setUsuario = (usuario) => {
    // Implementa la lógica para establecer el usuario actual
  };

  return { usuarios, setUsuario };
};

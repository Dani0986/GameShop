import React, { createContext, useEffect, useState, useContext } from 'react';

import axios from 'axios';
import PropTypes from "prop-types";

export const UsuariosContext = createContext();


export const UsuariosProvider = ({ children }) => {
    
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
 
        const response = await axios.get('http://localhost:8080/api/v1/user/getAll');
        setUsuarios(response.data);
      } catch (error) {
        console.error('Error al obtener conductores:', error);
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

UsuariosProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
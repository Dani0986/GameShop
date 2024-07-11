import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

// Crea el contexto
export const ComentariosContext = createContext();

// Define el reducer para manejar las acciones del contexto
const comentariosReducer = (state, action) => {
  switch (action.type) {
    case 'AGREGAR_COMENTARIO':
      return [...state, action.payload];
    case 'BORRAR_COMENTARIO':
      return state.filter((comentario) => {
        return !(comentario.juegoId === action.payload.juegoId && state.indexOf(comentario) === action.payload.comentarioIndex);
      });
    default:
      return state;
  }
};

// Define el proveedor del contexto
export const ComentariosProvider = ({ children }) => {
  const [comentarios, dispatch] = useReducer(comentariosReducer, []);

  return (
    <ComentariosContext.Provider value={{ comentarios, dispatch }}>
      {children}
    </ComentariosContext.Provider>
  );
};

ComentariosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

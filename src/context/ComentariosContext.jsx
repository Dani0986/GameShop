import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from "prop-types";

export const ComentariosContext = createContext();


const comentariosReducer = (state, action) => {
  switch (action.type) {

    case 'AGREGAR_COMENTARIO':
      return [...state, action.payload];

      case 'BORRAR_COMENTARIO':
        return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};


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
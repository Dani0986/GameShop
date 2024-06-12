import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

// Paso 1: Crear un contexto para el carrito
export const BasketContext = createContext();

// Paso 2: Definir una función reducer que añade nuevos productos o los elimina de la cesta
function BasketReducer(state, action) {
  switch (action.type) {
    case "add": {
      const itemIndex = state.findIndex(item => item.id === action.item.id);
      if (itemIndex !== -1) {
        const newState = [...state];
        newState[itemIndex] = {
          ...newState[itemIndex],
          cantidad: newState[itemIndex].cantidad + 1,
        };
        return newState;
      } else {
        return [...state, { ...action.item, cantidad: 1 }];
      }
    }
    case "remove": {
      return state.filter(item => item.id !== action.item.id);
    }
    default:
      return state;
  }
}

// Paso 3: Crear el provider que contendrá el estado y la función reductora
export const CartProvider = ({ children }) => {
  const [basket, dispatch] = useReducer(BasketReducer, []);
  return (
    <BasketContext.Provider value={{ basket, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Hook personalizado para usar el contexto del carrito
export const useCart = () => useContext(BasketContext);

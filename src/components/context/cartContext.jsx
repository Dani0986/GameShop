/*import React, { createContext, useContext, useReducer } from "react";
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
*/
//? Por hacer: Context - hecho
//Dado un template de una tienda online con una serie de productos, 
//necesitamos que estos productos puedan añadirse a nuestra cesta de la compra.
//Para ello, vamos a utilizar el context, de esta manera se compartirá la información de la cesta entre diferentes componentes

//? Por hacer: Reducer
// Definir el estado inicial
// Definir la función reductora 
// Llamar a userReducer
// Disparar acciones (dispatch)
// Actualizar componente
//Integración del componente

//! Recordar que context va fuera de los componentes 
//? Pasos: 
// Crear contexto para el carrito
import { createContext, useReducer} from "react"; //aqui cambio el useState por el useReducer
import PropTypes from 'prop-types';
export const CartContext = createContext();

const CartReducer = (state, action) => { //Le doy al provider la opción de usar el reducer
  //esta es la función reductora
  switch (action.type) {
    case "add": 
    return [...state, action.payload];
    //!case "remove": pendiente de definir
    //return 
    default:
      return state; 
  }
};

// Crear componente proveedor con el estado y la función reductora
export const CartProvider = ({ children }) => { //implementamos el useReducer
 const [cart, dispatch] = useReducer(CartReducer, []); // Al poner un array vacío decimos que nuestro carrito está vacío al inicio = estado inicial

  return (
    <CartContext.Provider value={{cart, dispatch}}>
      {children}
    </CartContext.Provider>

  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/* const removeProduct = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  }; */


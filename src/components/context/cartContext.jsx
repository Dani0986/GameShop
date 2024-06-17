
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


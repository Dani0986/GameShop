import { useState, createContext } from "react";
import PropTypes from 'prop-types';

// Crear el contexto
export const ProductContext = createContext();

// Proveedor de contexto
export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para añadir un item al carrito
  const añadir = (item) => {
    setCart(prevCart => [...prevCart, item]);
  };

  ProductProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  // El valor del contexto proporcionado a los componentes hijos
  const contextValue = {
    cart,
    añadir
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
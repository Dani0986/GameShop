import React, { createContext } from 'react';
import useLocalStorage from './useLocalStorage';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('cart', []);

  CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const añadir = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const eliminar = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const limpiar = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, añadir, eliminar, limpiar }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

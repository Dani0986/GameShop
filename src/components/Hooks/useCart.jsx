import React, {  useContext } from 'react';
import { CartContext } from './CartProvider';


export const useCart = () => {
  return useContext(CartContext);
};



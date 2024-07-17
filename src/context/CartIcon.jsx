import React from 'react';
import { useCart } from './cartContext';

export const CartIcon = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <div>Productos en el carrito: {cartItems.length}</div>
      <button>Comprar</button>
    </div>
  );
};

export default CartIcon;

// App.jsx

import React from "react";
import { CartProvider } from "./context/CartContext";
import ProductCard from "./components/ProductCard";

const products = [
  // Array de productos
];

const App = () => {
  return (
    <CartProvider>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </CartProvider>
  );
};

export default App;
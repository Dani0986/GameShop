/*import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import { CharactersProvider } from './context/CharacterContext';
import { UsuariosProvider } from './context/UsuariosContext';
import { CartProvider } from './context/cartContext'; 
import './index.css';

// Utilizando ReactDOM.createRoot
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsuariosProvider>
      <CharactersProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CharactersProvider>
    </UsuariosProvider>
  </React.StrictMode>
);

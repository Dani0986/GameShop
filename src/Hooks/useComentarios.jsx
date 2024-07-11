
import React from 'react';
import { ComentariosProvider } from './context/ComentariosProvider';
import GameList from '../components/GameProduct/GameList'; // Asegúrate de que la ruta sea correcta
import MainPage from '../pages/MainPage'; // Suponiendo que MainPage es la página principal

const usarComentarios = () => {
  return (
    <ComentariosProvider>
      <MainPage />
    </ComentariosProvider>
  );
};

export default usarComentarios;

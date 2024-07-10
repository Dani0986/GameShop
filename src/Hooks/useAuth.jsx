// src/Hooks/useAuth.jsx

import { useContext } from 'react';
import { AuthContext } from '../context/authContext'; // Asegúrate de que la ruta sea correcta

export const useAuth = () => {
  return useContext(AuthContext);
};

// src/Hooks/useAuth.jsx

import { useContext } from 'react';
import { AuthContext } from '../context/authContext'; // Asegúrate de que la ruta sea correcta

/*export const useAuth = () => {
  return useContext(AuthContext);
};*/
export const useAuth = () => {
  const { user, login, logout } = useContext(AuthContext);
  return { user, login, logout };
};

export default useAuth;
import { useContext } from 'react';
import { UsuariosContext } from '../context/UsuariosContext'; // Asegúrate de especificar la ruta correcta

export const useUsuarios = () => {
  return useContext(UsuariosContext);
};

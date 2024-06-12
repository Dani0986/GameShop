/* eslint-disable react/prop-types */ // Desactivamos la regla de ESLint para la validación de tipos de props en este archivo.

import { useNavigate } from "react-router-dom";
import {useAuth} from "../Hooks/useAuth";
// Importamos useNavigate de react-router-dom para la navegación programática.
// Importamos useAuth, un hook personalizado para acceder al contexto de autenticación.
// Definimos el componente AppBar, que recibe una prop llamada pages.

export const CustomAppBar = ({pages}) => {
    const navigate = useNavigate();
    const {user, logout} = useAuth();

    const handleNavigate = (path) => {
        if(path) {
            navigate(path);
        }
    };

    return(
        <nav>
        {pages?.map((page) => (
        <button key={page.label} onClick={() => handleNavigate(page.path)}>
          {page.label}{" "}
          {/* Etiqueta del botón, que corresponde a la label de la página */}
        </button>
      ))}
      {/* Si el usuario está autenticado, mostramos el botón de logout */}
      {!!user && (
        <button key={"logout"} onClick={logout}>
          Logout
        </button>
      )}
        </nav>

    )
}
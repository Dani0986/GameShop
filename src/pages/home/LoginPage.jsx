import React, { useContext } from 'react';
import { AuthContext } from './authcontext';

const LoginPage = () => {
  const { isLoggedIn, login } = useContext(AuthContext);

  const handleLogin = () => {
    // Aquí iría la lógica para autenticar al usuario
    login(); // Simulamos el inicio de sesión
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>¡Ya estás autenticado! Puedes acceder a tu perfil.</p>
      ) : (
        <button onClick={handleLogin}>Iniciar sesión</button>
      )}
    </div>
  );
};

export default LoginPage;
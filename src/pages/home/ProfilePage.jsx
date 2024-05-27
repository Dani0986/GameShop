import React, { useContext } from 'react';
import { AuthContext } from './authcontext';

const ProfilePage = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const handleLogout = () => {
    // Aquí iría la lógica para cerrar sesión
    logout(); // Simulamos el cierre de sesión
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Bienvenido a tu perfil</h2>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <p>Debes iniciar sesión para acceder a tu perfil.</p>
      )}
    </div>
  );
};

export default ProfilePage;
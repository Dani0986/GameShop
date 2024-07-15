// src/pages/LoginPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth'; // Asegúrate de importar useAuth desde el lugar correcto

export const LoginPage = () => {
  const { login } = useAuth(); // Obtén la función login desde el contexto de autenticación
  const navigate = useNavigate(); // Hook para la navegación programática
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulación de datos de usuario (reemplazar con lógica real de autenticación)
    const userData = {
      email,
      // Aquí puedes agregar más datos del usuario si es necesario
    };

    // Llama a la función login del contexto de autenticación
    login(userData);

    // Redirige a la página principal después del login exitoso
    navigate('/'); // Cambia la ruta según tu aplicación
  };

  return (
    <div>
      <h2>Inicia sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginPage;

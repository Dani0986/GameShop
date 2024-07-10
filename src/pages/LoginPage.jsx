import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Asegúrate de importar Link desde react-router-dom
import { useAuth } from '../Hooks/useAuth';
import { useUsuarios } from '../Hooks/useUsuarios';

export const LoginPage = () => {
  const { setUsuario, usuarios } = useUsuarios();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuario = usuarios.find(u => u.Email === email && u.Contrasena === password);
    if (usuario) {
      setUsuario(usuario);
      login(usuario);
      navigate('/'); // Redirige a la página principal o donde sea necesario después del login
    } else {
      console.log('Credenciales incorrectas');
    }
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
      <p>¿No tienes una cuenta? <Link to="/registro">Regístrate</Link></p> {/* Aquí se utiliza Link correctamente */}
    </div>
  );
};

export default LoginPage;

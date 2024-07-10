import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth';
import { useUsuarios } from '../context/useUsuarios';
import styled from 'styled-components';

const Button = styled.button`
  background-color: grey; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #45a049;
  }
`;

export const LoginPage = () => {
  const { setUsuario, usuarios } = useUsuarios();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuario = usuarios.find(u => u.Email === email && u.Contrasena === password);
    if (usuario) {
      setUsuario(usuario);
      login(usuario);
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
        <Button type="submit">Iniciar sesión</Button>
      </form>
      <p>¿No tienes una cuenta? <Link to="/registro">Regístrate</Link></p>
    </div>
  );
};

import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate, useOutlet } from 'react-router-dom';

export const HomeLayout = ({ children }) => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    console.warn("Usuario no autenticado");
  }

  if (user) {
    return <Navigate to='/autorizado/home' replace />;
  }

  return (
    <div>
      {outlet}
    </div>
  );
};

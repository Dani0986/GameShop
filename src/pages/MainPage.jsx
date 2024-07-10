// src/pages/MainPage.jsx

import React from 'react';
import { UserForm } from '../components/userForm';
import { RegistroPage } from './RegistroPage';
import { LoginPage } from './LoginPage';

const MainPage = () => {
  return (
    <div>
      <h1>Bienvenido a la Tienda</h1>
      <UserForm />
      <RegistroPage />
      <LoginPage />
    </div>
  );
};

export default MainPage;

// src/pages/MainPage.jsx

import React from 'react';
import { UserForm } from '../components/userForm';
import { RegistroPage } from './RegistroPage';
import { LoginPage } from '../pages/LoginPage';
import { Footer } from '../layaout/footer';


export const MainPage = () => {
 
  return (
    <div>
      <h1>Bienvenido a la Tienda</h1>
      <UserForm />      
      <RegistroPage />
      <LoginPage />
      <Footer />
    </div>
  );
};

export default MainPage;

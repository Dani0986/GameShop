import React from "react";
import { BasicPage } from "../components/user/BasicPage";
import Header from "../components/layaout/header"; // Asegúrate de que la ruta y el nombre del archivo sean correctos

export const ProfilePage = () => {
  return (
    <>
      <Header />
      <BasicPage
        title="Profile Page"
        description="Welcome to Profile - Protected Route"
      />
    </>
  );
};

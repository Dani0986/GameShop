import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../home"; // Asegúrate de que la ruta sea correcta

export default function PagesRoutes() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/another-route");
  };

  return (
    <div>
      <button onClick={handleNavigation}>Go to Another Route</button>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

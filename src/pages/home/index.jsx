import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "../home";
import { AnotherComponent } from "../another-component"; // Asegúrate de importar tus componentes

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
        <Route path="/another-route" element={<AnotherComponent />} />
      </Routes>
    </div>
  );
}

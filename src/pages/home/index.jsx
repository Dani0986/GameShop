import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";


export default function PagesRoutes() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/another-route");
  };

  return (
    <div>
      
      <Routes>
      <button onClick={handleNavigation}>Go to Another Route</button>
      </Routes>
    </div>
  );
}

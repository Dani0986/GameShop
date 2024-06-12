/*import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home"; // Asegúrate de que la ruta sea correcta
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";
import { SettingPage } from "../pages/SettingPage";
import { SignUpPage } from "../pages/SignUpPage";
import { HomeLayout } from "../components/user/HomeLayout";
import { ProtectedLayout } from "../components/user/ProtectedLayout";

export default function PagesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<HomeLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
      </Route>
      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="/dashboard/profile" element={<ProfilePage />} />
        <Route path="/dashboard/settings" element={<SettingPage />} />
      </Route>
    </Routes>
  );
}
*/
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home"; // Asegúrate de que la ruta sea correcta
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";
import { SettingPage } from "../pages/SettingPage";
import { SignUpPage } from "../pages/SignUpPage";

export default function PagesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="/dashboard/profile" element={<ProfilePage />} />
      <Route path="/dashboard/settings" element={<SettingPage />} />
    </Routes>
  );
}

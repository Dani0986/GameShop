
import "./App.css";

import PagesRoutes from "./pages";
import { ThemeProvider } from "@mui/material/styles";
import { BaseTheme } from "./theme/base";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./components/context/cartContext";
import { AuthProvider } from "./components/context/authContext";

//tendre que importarme los componentes protectedLayout y HomeLayout que hacen que 
//segun si existe o no el usuario me redirija a una pagina oa aotra

function App() {
  return (
    <ThemeProvider theme={BaseTheme}>
    <BrowserRouter>
      <CartProvider>
        <AuthProvider>
        <PagesRoutes />
        </AuthProvider>
      </CartProvider>
    </BrowserRouter>
  </ThemeProvider>
  );
}
export default App;
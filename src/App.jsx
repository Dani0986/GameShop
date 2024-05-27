import "./App.css";
import Pages from "./pages";
import { ThemeProvider } from '@mui/material/styles';
import { BaseTheme } from "./theme/base";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { ProductProvider } from "./components/context/productContext";
import Form from '../src/components/Forms/Form';
import { validateEmail } from '../src/components/utils/validation';
/*
function App() {
  return (
    <ThemeProvider theme={BaseTheme}>
      <BrowserRouter>    
        <ProductProvider>
        <Pages />
        </ProductProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
*/
const App = () => {
  const handleSubmit = (data) => {
    if (validateEmail(data.email)) {
      console.log('Form data:', data);
    } else {
      console.error('Invalid email address');
    }
  };

  return (
    <ThemeProvider theme={BaseTheme}>
      <BrowserRouter>
        <ProductProvider>
          <div>
            <h1>My Form</h1>
            <Form onSubmit={handleSubmit} />
            <Pages />
          </div>
        </ProductProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
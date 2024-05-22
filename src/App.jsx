import "./App.css";
import Pages from "./pages";
import { ThemeProvider } from '@mui/material/styles';
import { BaseTheme } from "./theme/base";
import { BrowserRouter } from "react-router-dom";
import Cart from './components/cart/cart';
import ProductsList from './components/product/productList';
import { Container } from '@mui/material';


function App() {
  return (
    <ThemeProvider theme={BaseTheme}>
      <BrowserRouter>
      <Container>
          <Cart />
          <ProductsList />
        </Container>
        <Pages />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

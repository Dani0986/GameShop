import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from './components/GameProduct/NavBar';
import { BaseTheme } from "./theme/base";
import { Home } from './pages/home/Home';
import { GameProvider } from './context/GameContext';
import GameList from './components/GameProduct/GameList';
import GameDetail from './components/GameProduct/GameDetail'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/*
function App() {
  return (
    <ThemeProvider theme={BaseTheme}>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;*/
const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
  },
};

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={BaseTheme}>
        <GameProvider>
          <div style={styles.app}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games" element={<GameList />} />
              <Route path="/games/:id" element={<GameDetail />} />
            </Routes>
          </div>
        </GameProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
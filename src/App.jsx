// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from './components/GameProduct/NavBar';
import { BaseTheme } from "./theme/base";
import { Home } from './pages/home/Home';
import { GameProvider } from './context/GameContext';
import GameList from './components/GameProduct/GameList';
import GameDetail from './components/GameProduct/GameDetail';

import MainPage from './pages/MainPage';
import RegistroPage from './pages/RegistroPage';
import LoginPage from './pages/LoginPage';

import { AuthProvider } from './context/authContext';

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
  },
};

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={BaseTheme}>
        <AuthProvider>
          <GameProvider>
            <div style={styles.app}>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<GameList />} />
                <Route path="/games/:id" element={<GameDetail />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/registro" element={<RegistroPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </div>
          </GameProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;



/*
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from './components/GameProduct/NavBar';
import { BaseTheme } from "./theme/base";
import { Home } from './pages/home/Home';
import { GameProvider } from './context/GameContext';
import GameList from './components/GameProduct/GameList';
import GameDetail from './components/GameProduct/GameDetail';

import MainPage from './pages/MainPage';  // Asegúrate de que la ruta sea correcta
import { RegistroPage } from './pages/RegistroPage';
import { LoginPage } from './pages/LoginPage';
import { AuthProvider } from './context/authContext';  // Asegúrate de que la ruta sea correcta

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
  },
};

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={BaseTheme}>
        <AuthProvider>
          <GameProvider>
            <div style={styles.app}>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<GameList />} />
                <Route path="/games/:id" element={<GameDetail />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/registro" element={<RegistroPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </div>
          </GameProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;*/



/*import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from './components/GameProduct/NavBar';
import { BaseTheme } from "./theme/base";
import { Home } from './pages/home/Home';
import { GameProvider } from './context/GameContext';
import GameList from './components/GameProduct/GameList';
import GameDetail from './components/GameProduct/GameDetail'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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

export default App;*/
/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormPage from '../Forms/FormPage';
import App from '../../App';
import ProtectedRoute from '../routes/ProtectedRoute';
import { AuthProvider } from '../context/authContext';

const MainApp = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route
            path="/main"
            element={
              <ProtectedRoute>
                <App />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default MainApp;
*/
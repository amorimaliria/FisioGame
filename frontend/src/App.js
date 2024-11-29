import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './views/login/login'; // Página de login
import RegisterPage from './views/cadastro/cadastro'; // Página de cadastro

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> {/* Página inicial */}
        <Route path="/cadastro" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
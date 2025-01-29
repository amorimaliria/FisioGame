import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './views/login/login';
import CadastroPage from './views/cadastro/cadastro';
function App() {
  console.log('App component is rendering...');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
      </Routes>
    </Router>
  );
}

export default App;
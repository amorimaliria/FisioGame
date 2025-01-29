import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './views/login/login';
import CadastroPage from './views/cadastro/cadastro';
import MenuPrincipalPage from './views/menu-principal/menu-principal';
function App() {
  console.log('App component is rendering...');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/menuPrincipal" element={<MenuPrincipalPage />} />
        {/* Rota para páginas não encontradas */}
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
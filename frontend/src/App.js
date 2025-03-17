import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './views/login/login';
import CadastroPage from './views/cadastro/cadastro';
import MenuPrincipal from './views/menu-principal/menu-principal';
import DashboardProfessor from './views/dashboard-professor/menu-professor';
import RankingPage from './views/ranking/ranking'
import AssuntosPage from './views/assuntos/assuntos';
import MainLayout from './components/main-layout';
import TopicPage from './views/startPage/startCard';
import TopicCirculatorio from './views/cards/cardCirculatorio/cardCirculatorio';
import GerenciamentoAssunto from './views/assuntos/assunto';
function App() {
  console.log('App component is rendering...');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/menuPrincipal" element={<MenuPrincipal />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/menuProfessor" element={<DashboardProfessor />} />
        <Route path="/assuntos" element={<AssuntosPage />} />
        <Route path="/começar" element={<TopicPage />} />
        <Route path="/cardCirculatorio" element={<TopicCirculatorio />} />
        <Route path="/assunto/:id" element={<GerenciamentoAssunto />} />

        {/* Rota para páginas não encontradas */}
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
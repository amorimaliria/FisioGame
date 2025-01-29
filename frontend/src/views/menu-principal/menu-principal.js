import React from 'react';
import { Link } from 'react-router-dom';
import './menu-principal.css';
import { Home, User, List } from 'lucide-react';

function MenuPrincipal() {
  return (
    <div className="menu-principal">
      <aside className="menu-lateral">
        <h1 className="titulo-app">FISIOGAME</h1>
        <nav className="menu-navegacao">
          <Link to="/inicio" className="menu-item">
            <Home /> Início
          </Link>
          <Link to="/ranking" className="menu-item">
            <List /> Ranking
          </Link>
          <Link to="/perfil" className="menu-item">
            <User /> Perfil
          </Link>
          <Link to="/mais" className="menu-item">
            <List /> Mais
          </Link>
        </nav>
      </aside>
      <main className="menu-conteudo">
        <h2>Selecione um tema para começar</h2>
        <div className="tema-grid">
          <button className="tema-botao membrana">Membrana Celular</button>
          <button className="tema-botao fisiologia">Fisiologia Muscular</button>
          <button className="tema-botao nervoso">Sistema Nervoso</button>
          <button className="tema-botao circulatorio">Sistema Circulatório</button>
          <button className="tema-botao urinario">Sistema Urinário</button>
          <button className="tema-botao respiratorio">Sistema Respiratório</button>
        </div>
        <div className="status-bar">
          <button className="toggle-sound">🔊 Desativar Sons</button>
          <div className="pontos">350 QUIRONS</div>
          <div className="vidas">❤ 4 VIDAS</div>
        </div>
      </main>
    </div>
  );
}

export default MenuPrincipal;
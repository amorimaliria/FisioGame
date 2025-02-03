import React from 'react';
import { Link } from 'react-router-dom';
import './menu-principal.css';
import logo from '../../assets/logo.png';
// Importando bibliotecas e funcionalidades
import { useState, activePage } from "react";
import { FaHome, FaMedal, FaUser, FaEllipsisH, FaVolumeUp, FaVolumeMute, FaStar, FaHeart } from 'react-icons/fa'

const MenuPrincipal = () => {
  const [isSoundOn, setSoundOn] = useState(true);
  const [quirons, setQuirons] = useState(350);
  const [vidas, setVidas] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [activePage, setActivePage] = useState('MenuPrincipalPage');

  const topics = [
    { name: 'Membrana Celular', color: '#6bddec', icon: '🧬' },
    { name: 'Fisiologia Muscular', color: 'orange', icon: '💪' },
    { name: 'Sistema Nervoso', color: 'limegreen', icon: '🧠' },
    { name: 'Sistema Circulatório', color: 'red', icon: '🩸' },
    { name: 'Sistema Urinário', color: 'skyblue', icon: '🔵' },
    { name: 'Sistema Respiratório', color: 'forestgreen', icon: '🌬️' },
    { name: 'Sistema Digestório', color: 'yellow', icon: '🍏' },
    { name: 'Sistema Endócrino', color: 'purple', icon: '🔮' },
    { name: 'Sistema Reprodutor', color: 'gray', icon: '⚧️' },
    { name: 'Fisiologia do Esporte', color: 'navy', icon: '🏊‍♂️' },
    { name: 'Duelo', color: 'darkblue', icon: '⚔️' },
    { name: 'Liga das Estrelas', color: 'pink', icon: '🏆' }
  ];

  const topicsPerPage = 6;

  const toggleSound = () => setSoundOn(!isSoundOn);
  const handleNextPage = () => setCurrentPage(currentPage + 1);
  const handlePreviousPage = () => setCurrentPage(currentPage - 1);
  const handleNavigation = (page) => { setActivePage(page);
  };

  return (
    <div className="menu-principal-container">
      {/* Barra de Navegação Lateral */}
      <nav className="sidebar-left">
        <h1 className="content-left">FISIOGAME</h1>
        <div className="menu-buttons">
        <button
          className={`menu-item ${activePage === 'MenuPrincipalPage' ? 'selected' : ''}`}
          onClick={() => handleNavigation('MenuPrincipalPage')}
        >
          <FaHome size={24} /> Início
        </button>
        <button
          className={`menu-item ${activePage === 'ranking' ? 'selected' : ''}`}
          onClick={() => handleNavigation('ranking')}
        >
          <FaMedal size={24} /> Ranking
        </button>
        <button
          className={`menu-item ${activePage === 'perfil' ? 'selected' : ''}`}
          onClick={() => handleNavigation('perfil')}
        >
          <FaUser size={24} /> Perfil
        </button>
        <button
          className={`menu-item ${activePage === 'mais' ? 'selected' : ''}`}
          onClick={() => handleNavigation('mais')}
        >
          <FaEllipsisH size={24} /> Mais
        </button>
      </div>
      </nav>

      {/* Seção Principal */}
      <main className="main-content">
        <header className="content-header">Selecione um assunto para continuar</header>

        <div className="topic-buttons">
          {topics.slice((currentPage - 1) * topicsPerPage, currentPage * topicsPerPage).map((topic, index) => (
            <button
              key={index}
              className="topic-button"
              style={{ backgroundColor: topic.color }}
            >
              {topic.icon} {topic.name}
            </button>
          ))}
        </div>
        <div className="pagination-controls">
          {currentPage > 1 && (
            <button className="pagination-button" onClick={handlePreviousPage}>
              ◀ Voltar
            </button>
          )}
          {currentPage * topicsPerPage < topics.length && (
            <button className="pagination-button" onClick={handleNextPage}>
              Próximo ▶
            </button>
          )}
        </div>
      </main>

      {/* Barra Lateral Direita */}
      <aside className="sidebar-right">
        <div className="login-image">
          <img
            src={logo}
            alt="FisioGame Logo"
            className='logo'
          />
        </div>
        <div className="sound-toggle" onClick={toggleSound}>
          {isSoundOn ? (
            <><FaVolumeUp size={24} /> Desativar Som</>
          ) : (
            <><FaVolumeMute size={24} /> Ativar Som</>
          )}
        </div>
        <div className="score-display">
          <FaStar size={24} /> {quirons} Quirons
        </div>
        <div className="lives-display">
          <FaHeart size={24} /> {vidas} Vidas
        </div>
      </aside>
    </div>
  );
};

export default MenuPrincipal;
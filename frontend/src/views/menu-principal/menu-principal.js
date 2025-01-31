import React from 'react';
import { Link } from 'react-router-dom';
import './menu-principal.css';
import { Home, User, List } from 'lucide-react';
import { useState } from 'react';
import { Trophy, Volume2, VolumeX, Star, Heart, ChevronRight, MoreHorizontal  } from 'lucide-react';

const MenuPrincipal = () => {
  const [soundOn, setSoundOn] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const topics = [
    { name: 'Membrana Celular', color: 'cyan', icon: '🧬' },
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
  const handleNextPage = () => setCurrentPage(currentPage + 1);
  const handlePreviousPage = () => setCurrentPage(currentPage - 1);

  return (
    <div className="menu-principal-container">
      {/* Barra de Navegação Lateral */}
      <nav className="sidebar-left">
        <h1>FISIOGAME</h1>
        <ul className="menu-list">
          <li className="menu-item selected">
            <Home size={24} /> Início
          </li>
          <li className="menu-item">
            <Trophy size={24} /> Ranking
          </li>
          <li className="menu-item">
            <User size={24} /> Perfil
          </li>
          <li className="menu-item">
            <MoreHorizontal size={24} /> Mais
          </li>
        </ul>
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
              <ChevronRight size={24} className="rotate-left" />
            </button>
          )}
          {currentPage * topicsPerPage < topics.length && (
            <button className="pagination-button" onClick={handleNextPage}>
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </main>

      {/* Barra Lateral Direita */}
      <aside className="sidebar-right">
        <div className="sound-toggle" onClick={() => setSoundOn(!soundOn)}>
          {soundOn ? (
            <><Volume2 size={24} /> Desativar Som</>
          ) : (
            <><VolumeX size={24} /> Ativar Som</>
          )}
        </div>
        <div className="score-display">
          <Star size={24} /> Quirons
        </div>
        <div className="lives-display">
          <Heart size={24} /> 5 Vidas
        </div>
      </aside>
    </div>
  );
};

export default MenuPrincipal;
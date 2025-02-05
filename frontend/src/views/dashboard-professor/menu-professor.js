import React, { useState } from 'react';
import { FaHome, FaUser, FaEllipsisH, FaUsers, FaBookOpen, FaVolumeUp, FaVolumeMute, FaSignOutAlt } from 'react-icons/fa';
import './menu-professor.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const DashboardProfessor = () => {
  const [isSoundOn, setSoundOn] = useState(true);
  const [isProfileExpanded, setProfileExpanded] = useState(false);
  const [activePage, setActivePage] = useState('DashboardPage');
  const userName = "Marcio"; // Apenas o primeiro nome
  const userType = "Professor";

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  const toggleSound = () => setSoundOn(!isSoundOn);
  const toggleProfileExpand = () => setProfileExpanded(!isProfileExpanded);

  return (
    <div className="menu-principal-container">
      {/* Barra de Navegação Lateral */}
      <nav className="sidebar-left">
        <div className="logo-container">
          <img src={logo} alt="FisioGame Logo" className="logo" />
          <h1 className="content-left">FISIOGAME</h1>
        </div>
        <div className="menu-buttons">
          <button
            className={`menu-item ${activePage === 'DashboardPage' ? 'selected' : ''}`}
            onClick={() => handleNavigation('DashboardPage')}
          >
            <FaHome size={24} /> Início
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

      {/* Conteúdo Principal */}
      <main className="main-content">
        <header className="content-header">Gerencie suas Turmas e Assuntos</header>
        <div className="topic-buttons">
          <button className="topic-button" style={{ backgroundColor: '#007C91' }}>
            <FaUsers size={24} /> Turmas
          </button>
          <Link to="/assuntos">
          <button className="topic-button" style={{ backgroundColor: '#6bddec' }}>
            <FaBookOpen size={24} /> Assuntos
          </button>
          </Link>
        </div>
      </main>

      {/* Barra Lateral Direita */}
      <aside className="sidebar-right">
        {/* Card de Informações do Usuário */}
        <div className={`profile-card ${isProfileExpanded ? 'expanded' : ''}`} onClick={toggleProfileExpand}>
          <div className="profile-info">
            <FaUser size={24} />
            <span>{userName}</span>
            <span className="user-type">{userType}</span>
          </div>
          {isProfileExpanded && (
            <button className="logout-button">
              <FaSignOutAlt size={18} /> Sair
            </button>
          )}
        </div>

        {/* Controle de Som */}
        <div className="sound-toggle" onClick={toggleSound}>
          {isSoundOn ? (
            <><FaVolumeUp size={24} /> Desativar Som</>
          ) : (
            <><FaVolumeMute size={24} /> Ativar Som</>
          )}
        </div>
      </aside>
    </div>
  );
};

export default DashboardProfessor;

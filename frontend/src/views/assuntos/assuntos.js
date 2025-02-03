import React, { useState, activePage } from 'react';
import './assuntos.css';
import { FaHome, FaMedal, FaUser, FaEllipsisH, FaVolumeUp, FaVolumeMute, FaSearch, FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import assuntosMock from '../../data/assuntos-mock'
import logo from '../../assets/logo.png';

const GerenciamentoAssuntos = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSoundOn, setSoundOn] = useState(true);
    const [isProfileExpanded, setProfileExpanded] = useState(false);
    const userName = "Marcio"; 
    const userType = "Professor";
  
    const toggleSound = () => setSoundOn(!isSoundOn);
    const toggleProfileExpand = () => setProfileExpanded(!isProfileExpanded);
  
    const assuntosFiltrados = assuntosMock.filter((assunto) =>
      assunto.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="menu-principal-container">
        {/* Barra de Navegação Lateral */}
        <nav className="sidebar-left">
          <div className="logo-container">
            <img src={logo} alt="FisioGame Logo" className="logo" />
            <h1 className="content-left">FISIOGAME</h1>
          </div>
          <div className="menu-buttons">
            <Link to="/dashboard">
              <button className="menu-item">
                <FaHome size={24} /> Início
              </button>
            </Link>
            <button className="menu-item">
              <FaUser size={24} /> Perfil
            </button>
            <button className="menu-item">
              <FaEllipsisH size={24} /> Mais
            </button>
          </div>
        </nav>
  
        {/* Conteúdo Principal */}
        <main className="main-content">
          <header className="content-header">Gerenciamento de Assuntos</header>
  
          {/* Barra de Pesquisa */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar Assunto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch size={20} className="search-icon" />
          </div>
  
          {/* Lista de Assuntos */}
          <div className="assuntos-list">
            {assuntosFiltrados.length > 0 ? (
              assuntosFiltrados.map((assunto) => (
                <Link
                  key={assunto.id}
                  to={`/assunto/${assunto.id}`}
                  className="assunto-card"
                >
                  {assunto.nome}
                </Link>
              ))
            ) : (
              <p className="no-results">Nenhum assunto encontrado.</p>
            )}
          </div>
        </main>
  
        {/* Barra Lateral Direita */}
        <aside className="sidebar-right">
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
  
  export default GerenciamentoAssuntos;

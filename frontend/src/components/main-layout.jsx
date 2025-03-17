import { Outlet, Link } from 'react-router-dom';
import { FaHome, FaUser, FaEllipsisH, FaSignOutAlt, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { useState } from 'react';
import logo from '../assets/logo.png';

const MainLayout = () => {
  const [isSoundOn, setSoundOn] = useState(true);
  const [isProfileExpanded, setProfileExpanded] = useState(false);
  const userName = "Marcio"; 
  const userType = "Professor";

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
        <Outlet />
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

export default MainLayout;
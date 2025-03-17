import React, { useState } from 'react';
import { FaHome, FaUser, FaEllipsisH, FaUsers, FaBookOpen, FaVolumeUp, FaVolumeMute, FaSignOutAlt } from 'react-icons/fa';
import styles from './menu-professor.module.css';
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
    <div className={styles["menu-principal-container"]}>
      {/* Barra de Navegação Lateral */}
      <nav className={styles["sidebar-left"]}>
        <div className={styles["logo-container"]}>
          <img src={logo} alt="FisioGame Logo" className={styles["logo"]} />
          <h1 className={styles["content-left"]}>FISIOGAME</h1>
        </div>
        <div className={styles["menu-buttons"]}>
          <button
            className={`${styles["menu-item"]} ${activePage === 'DashboardPage' ? styles["selected"] : ''}`}
            onClick={() => handleNavigation('DashboardPage')}
          >
            <FaHome size={24} /> Início
          </button>
          <button
            className={`${styles["menu-item"]} ${activePage === 'perfil' ? styles["selected"] : ''}`}
            onClick={() => handleNavigation('perfil')}
          >
            <FaUser size={24} /> Perfil
          </button>
          <button
            className={`${styles["menu-item"]} ${activePage === 'mais' ? styles["selected"] : ''}`}
            onClick={() => handleNavigation('mais')}
          >
            <FaEllipsisH size={24} /> Mais
          </button>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <main className={styles["main-content"]}>
        <header className={styles["content-header"]}>Gerencie suas Turmas e Assuntos</header>
        <div className={styles["topic-buttons"]}>
          <button className={styles["topic-button"]} style={{ backgroundColor: '#007C91' }}>
            <FaUsers size={24} /> Turmas
          </button>
          <Link to="/assuntos">
            <button className={styles["topic-button"]} style={{ backgroundColor: '#6bddec' }}>
              <FaBookOpen size={24} /> Assuntos
            </button>
          </Link>
        </div>
      </main>

      {/* Barra Lateral Direita */}
      <aside className={styles["sidebar-right"]}>
        {/* Card de Informações do Usuário */}
        <div className={`${styles["profile-card"]} ${isProfileExpanded ? styles["expanded"] : ''}`} onClick={toggleProfileExpand}>
          <div className={styles["profile-info"]}>
            <FaUser size={24} />
            <span>{userName}</span>
            <span className={styles["user-type"]}>{userType}</span>
          </div>
          {isProfileExpanded && (
            <button className={styles["logout-button"]}>
              <FaSignOutAlt size={18} /> Sair
            </button>
          )}
        </div>

        {/* Controle de Som */}
        <div className={styles["sound-toggle"]} onClick={toggleSound}>
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

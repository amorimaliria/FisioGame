import React from 'react';
import { Link } from 'react-router-dom';
import styles from './menu-principal.module.css';
import logo from '../../assets/logo.png';
import { useState, activePage } from "react";
import { FaHome, FaMedal, FaUser, FaEllipsisH, FaVolumeUp, FaVolumeMute, FaStar, FaHeart, FaSignOutAlt } from 'react-icons/fa'

const MenuPrincipal = () => {
  const [isSoundOn, setSoundOn] = useState(true);
  const [quirons, setQuirons] = useState(350);
  const [vidas, setVidas] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [activePage, setActivePage] = useState('MenuPrincipalPage');
  const [isProfileExpanded, setProfileExpanded] = useState(false);

  const userName = "Vitória"; // Apenas o primeiro nome
  const userType = "Aluno";

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
  const toggleProfileExpand = () => setProfileExpanded(!isProfileExpanded);

  return (
    <div className = {styles["menu1-principal-container"]}>
      {/* Barra de Navegação Lateral */}
      <nav className= {styles["sidebar-left"]}>
        <div className={styles["logo-container"]}>
          <img src={'/logo.png'} alt="FisioGame Logo" className={styles["logo"]} />
          <h1 className={styles["content-left"]}>FISIOGAME</h1>
        </div>
        <div className={styles["menu-buttons"]}>
        <button
          className={`${styles['menu-item']} ${activePage === 'MenuPrincipalPage' ? styles['selected'] : ''}`}
          onClick={() => handleNavigation('MenuPrincipalPage')}
        >
          <FaHome size={24} /> Início
        </button>
        <button
          className={`${styles['menu-item']} ${activePage === 'ranking' ? styles['selected'] : ''}`}
          onClick={() => handleNavigation('ranking')}
        >
          <FaMedal size={24} /> Ranking
        </button>
        <button
          className={`${styles['menu-item']} ${activePage === 'perfil' ? styles['selected'] : ''}`}
          onClick={() => handleNavigation('perfil')}
        >
          <FaUser size={24} /> Perfil
        </button>
        <button
          className={`${styles['menu-item']} ${activePage === 'mais' ? styles['selected'] : ''}`}
          onClick={() => handleNavigation('mais')}
        >
          <FaEllipsisH size={24} /> Mais
        </button>
      </div>
      </nav>

      {/* Seção Principal */}
      <main className= {styles["main-content"]}>
        <header className= {styles["content-header"]}>Selecione um assunto para continuar</header>

        <div className={styles["card-buttons"]}>
          {topics.slice((currentPage - 1) * topicsPerPage, currentPage * topicsPerPage).map((topic, index) => (
            <button
              key={index}
              className={styles["card-button"]}
              style={{ backgroundColor: topic.color }}
            >
              {topic.icon} {topic.name}
            </button>
          ))}
        </div>
        <div className={styles["pagination-controls"]}>
          {currentPage > 1 && (
            <button className={styles["pagination-button" ]} onClick={handlePreviousPage}>
              ◀ Voltar
            </button>
          )}
          {currentPage * topicsPerPage < topics.length && (
            <button className= {styles["pagination-button"]} onClick={handleNextPage}>
              Próximo ▶
            </button>
          )}
        </div>
      </main>

      {/* Barra Lateral Direita */}
      <aside className={styles["sidebar-right"]}>
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
        <div className={styles["sound-toggle"]} onClick={toggleSound}>
          {isSoundOn ? (
            <><FaVolumeUp size={24} /> Desativar Som</>
          ) : (
            <><FaVolumeMute size={24} /> Ativar Som</>
          )}
        </div>
        <div className={styles["score-display"]}>
          <FaStar size={24} /> {quirons} Quirons
        </div>
        <div className={styles["lives-display"]}>
          <FaHeart size={24} /> {vidas} Vidas
        </div>
      </aside>
    </div>
  );
};

export default MenuPrincipal;
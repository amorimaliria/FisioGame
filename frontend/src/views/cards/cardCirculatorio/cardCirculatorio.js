import React from 'react';
import styles from './card.module.css';
import { FaHome, FaMedal, FaUser, FaEllipsisH, FaVolumeUp, FaVolumeMute, FaStar, FaHeart, FaSignOutAlt, FaHeartbeat } from 'react-icons/fa'
import { useState } from "react";
import { Link } from 'react-router-dom'; // Importe o Link

const TopicCirculatorio = ({ topicName }) => {
    const [isSoundOn, setSoundOn] = useState(true);
    const [quirons, setQuirons] = useState(350);
    const [vidas, setVidas] = useState(4);
    const [activePage, setActivePage] = useState('MenuPrincipalPage');
    const [isProfileExpanded, setProfileExpanded] = useState(false);

    const userName = "Vitória"; // Apenas o primeiro nome
    const userType = "Aluno";

    const toggleSound = () => setSoundOn(!isSoundOn);
    const handleNavigation = (page) => { setActivePage(page); };
    const toggleProfileExpand = () => setProfileExpanded(!isProfileExpanded);


    return (
        <div className={styles["topic-page-container"]}>
            {/* Barra de Navegação Lateral */}
            <nav className={styles["sidebar-left"]}>
                <div className={styles["logo-container"]}>
                    <img src={'/logo.png'} alt="FisioGame Logo" className={styles["logo"]} />
                    <h1 className={styles["content-left"]}>FISIOGAME</h1>
                </div>
                <div className={styles["menu-buttons"]}>
                    <Link to="/" className={styles['menu-item-link']}> {/* Usando Link aqui */}
                        <button
                            className={`${styles['menu-item']} ${activePage === 'MenuPrincipalPage' ? styles['selected'] : ''}`}
                            onClick={() => handleNavigation('MenuPrincipalPage')}
                        >
                            <FaHome size={24} /> Início
                        </button>
                    </Link>
                    <Link to="/ranking" className={styles['menu-item-link']}> {/* Usando Link aqui */}
                        <button
                            className={`${styles['menu-item']} ${activePage === 'ranking' ? styles['selected'] : ''}`}
                            onClick={() => handleNavigation('ranking')}
                        >
                            <FaMedal size={24} /> Ranking
                        </button>
                    </Link>
                    <Link to="/perfil" className={styles['menu-item-link']}> {/* Usando Link aqui */}
                        <button
                            className={`${styles['menu-item']} ${activePage === 'perfil' ? styles['selected'] : ''}`}
                            onClick={() => handleNavigation('perfil')}
                        >
                            <FaUser size={24} /> Perfil
                        </button>
                    </Link>
                    <Link to="/mais" className={styles['menu-item-link']}> {/* Usando Link aqui */}
                        <button
                            className={`${styles['menu-item']} ${activePage === 'mais' ? styles['selected'] : ''}`}
                            onClick={() => handleNavigation('mais')}
                        >
                            <FaEllipsisH size={24} /> Mais
                        </button>
                    </Link>
                </div>
            </nav>

            {/* Seção Principal */}
            <main className={styles["main-content"]}>
                <header className={styles["content-header"]}> SISTEMA CIRCULATÓRIO </header>
                <div className={styles["topic-content"]}>
                    <button className={styles["start-button"]}> <FaHeartbeat/> COMEÇAR </button>
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

export default TopicCirculatorio;
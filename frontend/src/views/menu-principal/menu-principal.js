import React, { useState } from 'react';
import styles from './menu-principal.module.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom'; // Importe o Link
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
        { name: 'Membrana Celular', color: '#6bddec', icon: '🧬', path: '/começar' }, // Adicione o path
        { name: 'Fisiologia Muscular', color: 'orange', icon: '💪', path: '/fisiologia-muscular' }, // Adicione o path
        { name: 'Sistema Nervoso', color: 'limegreen', icon: '🧠', path: '/sistema-nervoso' }, // Adicione o path
        { name: 'Sistema Circulatório', color: '#f14029', icon: '🩸', path: '/cardCirculatorio' }, // Adicione o path
        { name: 'Sistema Urinário', color: 'skyblue', icon: '🔵', path: '/sistema-urinario' }, // Adicione o path
        { name: 'Sistema Respiratório', color: 'forestgreen', icon: '🌬️', path: '/sistema-respiratorio' }, // Adicione o path
        { name: 'Sistema Digestório', color: 'yellow', icon: '🍏', path: '/sistema-digestorio' }, // Adicione o path
        { name: 'Sistema Endócrino', color: 'purple', icon: '🔮', path: '/sistema-endocrino' }, // Adicione o path
        { name: 'Sistema Reprodutor', color: 'gray', icon: '⚧️', path: '/sistema-reprodutor' }, // Adicione o path
        { name: 'Fisiologia do Esporte', color: 'navy', icon: '🏊‍♂️', path: '/fisiologia-esporte' }, // Adicione o path
        { name: 'Duelo', color: 'darkblue', icon: '⚔️', path: '/duelo' }, // Adicione o path
        { name: 'Liga das Estrelas', color: 'pink', icon: '🏆', path: '/liga-estrelas' } // Adicione o path
    ];

    const topicsPerPage = 6;

    const toggleSound = () => setSoundOn(!isSoundOn);
    const handleNextPage = () => setCurrentPage(currentPage + 1);
    const handlePreviousPage = () => setCurrentPage(currentPage - 1);
    const handleNavigation = (page) => { setActivePage(page); };
    const toggleProfileExpand = () => setProfileExpanded(!isProfileExpanded);


    return (
        <div className={styles["menu1-principal-container"]}>
            {/* Barra de Navegação Lateral */}
            <nav className={styles["sidebar-left"]}>
                <div className={styles["logo-container"]}>
                    <img src={logo} alt="FisioGame Logo" className={styles["logo"]} />
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
                <header className={styles["content-header"]}>Selecione um assunto para continuar</header>

                <div className={styles["card-buttons"]}>
                    {topics.slice((currentPage - 1) * topicsPerPage, currentPage * topicsPerPage).map((topic, index) => (
                        <Link to={`${topic.path}`} key={index} style={{ textDecoration: 'none' }}> {/* Link aqui */}
                            <button
                                className={styles["card-button"]}
                                style={{ backgroundColor: topic.color }}
                            >
                                {topic.icon} {topic.name}
                            </button>
                        </Link>
                    ))}
                </div>
                <div className={styles["pagination-controls"]}>
                    {currentPage > 1 && (
                        <button className={styles["pagination-button"]} onClick={handlePreviousPage}>
                            ◀ Voltar
                        </button>
                    )}
                    {currentPage * topicsPerPage < topics.length && (
                        <button className={styles["pagination-button"]} onClick={handleNextPage}>
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
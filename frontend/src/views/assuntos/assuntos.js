import React, { useState, activePage } from 'react';
import styles from './assuntos.module.css';
import { FaHome, FaMedal, FaUser, FaEllipsisH, FaVolumeUp, FaVolumeMute, FaSearch, FaSignOutAlt, FaPlus, } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import assuntosMock from '../../data/assuntos-mock'
import logo from '../../assets/logo.png';

const GerenciamentoAssuntos = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSoundOn, setSoundOn] = useState(true);
    const [isProfileExpanded, setProfileExpanded] = useState(false);
    const navigate = useNavigate();
    const userName = "Marcio"; 
    const userType = "Professor";
  
    const toggleSound = () => setSoundOn(!isSoundOn);
    const toggleProfileExpand = () => setProfileExpanded(!isProfileExpanded);
  
    const assuntosFiltrados = assuntosMock.filter((assunto) =>
      assunto.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className={styles["menu-principal-container"]}>
        {/* Barra de Navegação Lateral */}
        <nav className={styles["sidebar-left"]}>
          <div className="logo-container">
            <img src={logo} alt="FisioGame Logo" className={styles["logo"]}/>
            <h1 className={styles["content-left"]}>FISIOGAME</h1>
          </div>
          <div className={styles["menu-buttons"]}>
            <Link to="/dashboard">
              <button className={styles["menu-item"]}>
                <FaHome size={24} /> Início
              </button>
            </Link>
            <button className={styles["menu-item"]}>
              <FaUser size={24} /> Perfil
            </button>
            <button className={styles["menu-item"]}>
              <FaEllipsisH size={24} /> Mais
            </button>
          </div>
        </nav>
  
        {/* Conteúdo Principal */}
        <main className={styles["main-content"]}>
          <header className={styles["content-header"]}>Assuntos</header>
  
          {/* Barra de Pesquisa */}
          <div className={styles["search-bar"]}>
            <input
              type="text"
              placeholder="Buscar Assunto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch size={20} className={styles["search-icon"]} />
          </div>

           {/* Botão de Cadastro de Assunto */}
          <button
            className={`${styles["menu-item"]} ${styles["add-assunto"]}`}
            onClick={() => navigate('/assuntos/cadastrar')}
          >
            <FaPlus size={18} /> Novo Assunto
          </button>

  
          {/* Lista de Assuntos */}
          <div className={styles["assuntos-list"]}>
            {assuntosFiltrados.length > 0 ? (
              assuntosFiltrados.map((assunto) => (
                <Link
                  key={assunto.id}
                  to={`/assunto/2`}
                  className={styles["assunto-card"]}
                >
                  {assunto.nome}
                </Link>
              ))
            ) : (
              <p className={styles["no-results"]}>Nenhum assunto encontrado.</p>
            )}
          </div>
        </main>
  
        {/* Barra Lateral Direita */}
        <aside className={styles["sidebar-right"]}>
          <div className={`${styles['profile-card']} ${isProfileExpanded ? styles['expanded'] : ''}`} onClick={toggleProfileExpand}>
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
  
  export default GerenciamentoAssuntos;

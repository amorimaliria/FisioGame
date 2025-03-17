import React from 'react';
import { useState } from 'react';
import styles from './assuntos.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaHome, FaUser, FaEllipsisH, FaVolumeUp, FaVolumeMute, FaSignOutAlt, FaTrash, FaEdit, FaQuestionCircle } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const GerenciamentoAssunto = () => {
  const { assuntoId } = useParams(); // Para capturar o ID do assunto na URL
  const [isSoundOn, setSoundOn] = useState(true);
  const [isProfileExpanded, setProfileExpanded] = useState(false);
  const userName = "Marcio"; 
  const userType = "Professor";
  const navigate = useNavigate();

  const toggleSound = () => setSoundOn(!isSoundOn);
  const toggleProfileExpand = () => setProfileExpanded(!isProfileExpanded);

  const handleDeleteAssunto = () => {
    if (window.confirm('Tem certeza de que deseja excluir este assunto?')) {
      // Função para excluir o assunto (substituir por lógica real)
      alert(`Assunto ${assuntoId} excluído com sucesso!`);
      navigate('/gerenciamento-assuntos');
    }
  };

  const handleEditAssunto = () => {
    navigate(`/assuntos/${assuntoId}/editar`);
  };

  const handleViewQuestions = () => {
    navigate(`/assuntos/${assuntoId}/perguntas`);
  };

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
        <header className={styles["content-header"]}> SISTEMA CIRCULATÓRIO </header>

        {/* Ações sobre o Assunto */}
        <div className={styles["assunto-actions"]}>
          <button className={styles["menu-item"]} onClick={handleEditAssunto}>
            <FaEdit size={18} /> Editar Assunto
          </button>
          <button className={styles["menu-item"]} onClick={handleDeleteAssunto}>
            <FaTrash size={18} /> Excluir Assunto
          </button>
          <button className={styles["menu-item"]} onClick={handleViewQuestions}>
            <FaQuestionCircle size={18} /> Perguntas
          </button>
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

export default GerenciamentoAssunto;
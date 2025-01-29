import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import logo from '../../assets/logo.png';

function Login() {
  console.log('Login component is rendering...');
  return (
    <div className="login-container">
      <div className="login-image">
        <img
          src={logo}
          alt="FisioGame Logo"
          className="logo"
        />
        <h1>FISIOGAME</h1>
      </div>
      <div className="login-form">
        <h2>Bem Vindo(a)!</h2>
        <p>Insira seus dados de login para continuar.</p>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Digite seu email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha" />
          </div>
          <Link to="/menuPrincipal">
            <button type="button">Entrar</button>
          </Link>
        </form>
        <div className="form-footer">
          <a href="#forgot-password">Esqueceu a senha?</a>
          <p>
            Não possui conta? <Link to="/cadastro">Cadastre-se</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

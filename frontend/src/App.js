import React from 'react';
import './App.css';

function App() {
  return (
    <div className="login-container">
      <div className="login-image">
        <img
          src="./logo.png"
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
          <div className="form-group">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Lembrar de mim</label>
          </div>
          <button type="submit">Entrar</button>
        </form>
        <div className="form-footer">
          <a href="#forgot-password">Esqueceu a senha?</a>
          <p>
            Não possui conta? <a href="#register">Cadastre-se</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

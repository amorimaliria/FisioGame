import React from 'react';
import './Cadastro.css';

function Cadastro() {
  return (
    <div className="register-container">
      <form action="/register" method="POST">
        <h1>Cadastro</h1>

        <label htmlFor="fullName">Nome Completo</label>
        <input type="text" id="fullName" name="fullName" placeholder="Digite seu nome completo" required />

        <label htmlFor="nickname">Apelido</label>
        <input type="text" id="nickname" name="nickname" placeholder="Digite seu apelido" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Digite seu email" required />

        <label htmlFor="confirmEmail">Confirmação de Email</label>
        <input type="email" id="confirmEmail" name="confirmEmail" placeholder="Confirme seu email" required />

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" name="password" placeholder="Digite sua senha" required />

        <label htmlFor="confirmPassword">Confirmação de Senha</label>
        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirme sua senha" required />

        <button type="submit">Cadastrar</button>
        <p className="back-to-login">Já possui conta? <a href="/login">Voltar ao Login</a></p>
      </form>
    </div>
  );
}

export default Cadastro;
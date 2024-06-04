document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confirmaSenha = document.getElementById('confirmaSenha').value;
  
    if (senha !== confirmaSenha) {
      alert('As senhas não coincidem. Por favor, tente novamente.');
      return;
    }
  
    // Simulação de envio de dados
    alert('Cadastro realizado com sucesso!');
    
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
  });
  
const entrarBtn = document.getElementById('entrar');
const registrarBtn = document.getElementById('registrar');
const visualizarUsuarioInput = document.getElementById('visualizar-usuario');
const usuarioInput = document.getElementById('usuario');

entrarBtn.addEventListener('click', () => {
    // Aqui você adicionaria a lógica para tratar o login
    // Por exemplo: 
    // 1. Obter os valores dos campos de login e senha
    // 2. Validar os dados
    // 3. Fazer uma requisição para o servidor para verificar a autenticação
    // 4. Redirecionar para a página principal ou exibir uma mensagem de erro
    console.log("Botão Entrar pressionado");
});

registrarBtn.addEventListener('click', () => {
    // Aqui você adicionaria a lógica para tratar o novo registro
    // Por exemplo: 
    // 1. Obter os valores dos campos de usuário e senha
    // 2. Validar os dados
    // 3. Fazer uma requisição para o servidor para registrar o novo usuário
    // 4. Exibir uma mensagem de sucesso ou erro
    console.log("Botão Registrar pressionado");
    visualizarUsuarioInput.value = usuarioInput.value;
});
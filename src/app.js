document.querySelectorAll('.sidebar-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.sidebar-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        // Redirecionar para a página correspondente
        switch (button.id) {
            case 'inicio':
                window.location.href = 'inicio.html';
                break;
            case 'ranking':
                window.location.href = 'ranking.html';
                break;
            case 'perfil':
                window.location.href = 'perfil.html';
                break;
            case 'mais':
                window.location.href = 'mais.html';
                break;
        }
    });
});

document.querySelectorAll('.theme-button').forEach(button => {
    button.addEventListener('click', () => {
        // Redirecionar para a página do tema correspondente
        switch (button.id) {
            case 'membrana-celular':
                window.location.href = 'quiz.html?theme=membrana-celular';
                break;
            case 'fisiologia-muscular':
                window.location.href = 'quiz.html?theme=fisiologia-muscular';
                break;
            case 'sistema-nervoso':
                window.location.href = 'quiz.html?theme=sistema-nervoso';
                break;
            case 'sistema-circulatorio':
                window.location.href = 'quiz.html?theme=sistema-circulatorio';
                break;
            case 'sistema-urinario':
                window.location.href = 'quiz.html?theme=sistema-urinario';
                break;
            case 'sistema-respiratorio':
                window.location.href = 'quiz.html?theme=sistema-respiratorio';
                break;
        }
    });
});

document.getElementById('desativar-som').addEventListener('click', () => {
    // Função para desativar o som
    // Exemplo:
    alert('Som desativado');
});

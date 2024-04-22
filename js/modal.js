// Função para abrir o modal
function abrirModal() {
    var modal = document.querySelector('.modal');
    modal.style.display = 'block';
}

// Função para fechar o modal
function fecharModal() {
    var modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

        // abrir o contato de whats pagina inicio
var botaoAbrirSite = document.getElementById('abrirSite');

        // Adiciona um evento de clique ao botão
botaoAbrirSite.addEventListener('click', function() {
    // URL do site que você deseja abrir
    var url = 'https://wa.me/5514991761256?text=Ol%C3%A1%2C+Td+bem%3F+Como+posso+ajudar%3F';

    // Abre o site em uma nova janela
    window.open(url);
});
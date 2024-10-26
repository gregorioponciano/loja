        // Função para abrir o modal simples
        document.getElementById("abrirModalSimples").onclick = function() {
            document.getElementById("modalInfoSimples").style.display = "flex";
        }

        // Função para fechar o modal simples
        function fecharModalSimples() {
            document.getElementById("modalInfoSimples").style.display = "none";
        }

        // Fecha o modal se o usuário clicar fora do conteúdo
        window.onclick = function(event) {
            if (event.target == document.getElementById("modalInfoSimples")) {
                fecharModalSimples();
            }
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
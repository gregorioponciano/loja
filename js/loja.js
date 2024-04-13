function trocarConteudo(id) {
    var largeContent = document.getElementById('conteudo-grande');
    var largeContentHTML = largeContent.innerHTML;
    largeContent.innerHTML = id.innerHTML;
    id.innerHTML = largeContentHTML;
}
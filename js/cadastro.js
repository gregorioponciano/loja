document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário para processamento

    // Obtém os valores dos campos
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("email").value;
    let email = document.getElementById("senha").value;

    // Verifica se todos os campos foram preenchidos
    if (nome && email && senha) {
        alert(`obrigado por se cadastra ${nome} mais este sistema ainda nao esta Disponivel no momento por favor entre em contato pelo whatszap '014 99176-1256'`);
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

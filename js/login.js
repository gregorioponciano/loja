const usuarioCorreto = "usuario123";
const senhaCorreta = "senha123";

document.getElementById("formLogin").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos
    let usuario = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    // Verifica se o usuário e a senha estão corretos
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        mensagem.textContent = "Login realizado com sucesso! Bem-vindo!";
        mensagem.className = "mensagem-sucesso";
    } else {
        mensagem.textContent = "Usuário ou senha incorretos. Tente novamente.";
        mensagem.className = "mensagem-erro";
    }
});


/*function logar() {

  var nome = document.getElementById('nome').value //value é para pegar oque foi digitado dentro do input 
  var senha = document.getElementById('senha').value

if(nome == "admin" && senha == "admin123") {
    alert(`susseso`);
    location.href = "logado.html";  // location.href procura uma pagina html que vai ser redirecionada
}else{
    alert('Usuario ou senha incorretos');
}}

function mostrarSenha() {
  var inputSenha = document.getElementById("senha");
  if (inputSenha.type === "password") {

    inputSenha.type = "text";
  } else {
    inputSenha.type = "password";
  }
}*/ 

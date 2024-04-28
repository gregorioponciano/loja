function logar() {

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
}
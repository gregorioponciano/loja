function logar() {

var nome = document.getElementById('nome').value //value é para pegar oque foi digitado dentro do input 
var senha = document.getElementById('senha').value

if(nome == "admin" && senha == "admin123") {
    alert(`susseso`);
    location.href = "inicio.html";  // location.href procura uma pagina html que vai ser redirecionada
}else{
    alert('Usuario ou senha incorretos');
}
}
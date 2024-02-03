function logar() {

var nome = document.getElementById('nome').value
var senha = document.getElementById('senha').value

if(nome == "admin" && senha == "admin123") {
    alert(`susseso`);
}else{
    alert('Usuario ou senha incorretos');
}
}
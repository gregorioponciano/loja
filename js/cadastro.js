const menostermos = document.querySelector('#a-menos-termos')
const maistermos = document.querySelector('#a-mais-termos')
const conteudo = document.querySelector('#p-mais-termos')


function maisTermos() {
    conteudo.style.display = 'block'
    maistermos.style.display = 'none'
    menostermos.style.display = 'block'
}


function menosTermos() {
    menostermos.style.display = 'none'
    maistermos.style.display = 'block'
    conteudo.style.display = 'none'
}



function cadastro() {
        //cadastro
    var nome = document.querySelector('#nome').value
    var sobrenome = document.querySelector('#sobrenome').value
    var email = document.querySelector('#email').value
    var senha = document.querySelector('#senha').value
    var termos = document.querySelector('#concordo').value
    
    var cadastro =document.querySelector('.input-cadastro')

    if (nome === "" || sobrenome === "" || email ==="") {
        alert(`prencha os dados`)
        return
    }
    alert(`obrigado por se cadastra ${nome} ${sobrenome} mais este sistema ainda nao esta Disponivel no momento por favor entre em contato pelo whatszap '014 99176-1256'`)
    

}


function cadastro() {
        //cadastro
    var nome = document.querySelector('#nome').value
    var email = document.querySelector('#email').value
    var senha = document.querySelector('#senha').value
    var termos = document.querySelector('#concordo').value
    


    if (nome === ""  || email ==="") {
        alert(`prencha os dados`)
        return
    }
    alert(`obrigado por se cadastra ${nome} mais este sistema ainda nao esta Disponivel no momento por favor entre em contato pelo whatszap '014 99176-1256'`)
    

}


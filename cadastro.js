const menostermos = document.querySelector('#ler-menos-termos')
const maistermos = document.querySelector('#ler-mais-termos')
const conteudo = document.querySelector('#p-ler-mais-termos')


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

/*

const menosnoticias = document.querySelector('#menos-noticias')
const maisnoticias = document.querySelector('#mais-noticias')
const conteudonoticias = document.querySelector('#p-noticias')

function maisNoticias() {



    conteudonoticias.style.display = 'block'
    maisnoticias.style.display = 'none'
    menosnoticias.style.display = 'block'
}


function menosNoticias() {
    menosnoticias.style.display = 'none'
    maisnoticias.style.display = 'block'
    conteudonoticias.style.display = 'none'
} */





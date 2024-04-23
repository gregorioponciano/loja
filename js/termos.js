function toggleContent(id) {
    var content = document.getElementById(id);
    var contents = document.getElementsByClassName('section');
    for (var i = 0; i < contents.length; i++) {
        if (contents[i] !== content) {
            contents[i].style.display = 'none';
        }
    }
    if (content.style.display === 'block') {
        content.style.display = 'block'; // deixa o conteudo aparendo mesmo quando clicar dinovo nele
    } else {
        content.style.display = 'block';}
}
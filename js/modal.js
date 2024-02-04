const openModalButton = document.getElementById('open-modal');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');

// Função para abrir o modal
function openModal() {
    modal.classList.add('active');
}

// Função para fechar o modal
function closeModal() {
    modal.classList.remove('active');
}

// Adicionar eventos de click aos botões
openModalButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);

// Fechar o modal ao clicar fora da área de conteúdo
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
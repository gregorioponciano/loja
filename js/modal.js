const modal = document.getElementById('modal');
const abrirModal = document.getElementById('abrir-modal');
const fecharModal = document.getElementById('fechar-modal');

abrirModal.addEventListener('click', () => {
  modal.classList.remove('escondido');
  modal.style.opacity = 1;
  modal.style.pointerEvents = 'auto';
});

fecharModal.addEventListener('click', () => {
  modal.classList.add('escondido');
  modal.style.opacity = 0;
  modal.style.pointerEvents = 'none';
});
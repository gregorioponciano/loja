function verificarStatusFuncionamento() {
    const agora = new Date();
    const diaSemana = agora.getDay(); // Obtém o dia da semana (0 = Domingo, 1 = Segunda, ..., 6 = Sábado)
    const hora = agora.getHours();

    // Verifica se é sábado ou domingo
    if (diaSemana === 0 || diaSemana === 6) { 
      if (hora >= 7 && hora < 12) {  // De sabado e domingo
        return 'Aberta';
      } else {
        return 'Fechado';
      }
    } else if (hora >= 18 && hora < 22) { // De segunda a sexta
      return 'Aberta';
    } else {
      return 'Fechado';
    }
  }

  const status = verificarStatusFuncionamento();
  const statusElement = document.getElementById('status');
  statusElement.textContent = `${status}`;

  if (status === 'Aberta') {
  statusElement.textContent = 'Aberta';
  statusElement.style.color = 'green';
} else {
  statusElement.textContent = 'Fechado';
  statusElement.style.color = 'red';
}
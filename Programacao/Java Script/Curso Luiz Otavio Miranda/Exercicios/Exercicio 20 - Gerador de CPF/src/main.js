import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function() {
  const refreshbtn = document.querySelector('.refresh')
  refreshbtn.addEventListener('click', refresh)
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector('.cpf-gerado');
  cpfGerado.innerHTML = gera.geraNovoCpf();
})();

function refresh(){
  window.location.reload();
}

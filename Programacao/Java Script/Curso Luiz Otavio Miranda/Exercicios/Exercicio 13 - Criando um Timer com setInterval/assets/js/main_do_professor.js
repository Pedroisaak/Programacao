function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);      //multiplicou por 1000 já que o retorno é em milesegundos, assim tranformando em segundos
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener('click', function(e) {
    const el = e.target;                      //'e.target' quando o usuario clica em um elemento ele lê o elemento clicado

    if (el.classList.contains('zerar')) {     //caso o usuario clicar em um elemento que contem a classe 'zerar' o if é executado
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');    
      segundos = 0;
    }

    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');    //remove a classe pausado deixando assim o texto na cor padrao
      clearInterval(timer);
      iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');       //foi criado no css uma classe 'pausado' que deixa o texto vermelho 'relogio.classList.add' adiciona este elemento no pausar, deixando assim, o texto em vermelho
    }
  });
}
relogio();

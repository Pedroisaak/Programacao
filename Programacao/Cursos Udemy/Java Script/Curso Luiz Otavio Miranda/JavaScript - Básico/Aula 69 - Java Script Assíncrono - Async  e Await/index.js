/* Async e await é praticamente a mesma coisa que promisse, porém menos verboso e a função precisa de um objeto promise*/

function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}



function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof msg !== 'string') {
        reject('CAI NO ERRO');
        return;
      }
      resolve(msg.toUpperCase() + ' - Passei na promise');
      return;
    }, tempo);
  });
}

//declaração da funcao deve ter 'async', com isto obtemos acesso ao await
async function executa() {
  try {
    //com await, a próxima função só executara depois da conclusão desta
    const fase1 = await esperaAi('Fase 1', 1000);
    console.log(fase1);

    const fase2 = await esperaAi('Fase 2', rand());
    console.log(fase2);

    const fase3 = await esperaAi('Fase 3', rand());
    console.log(fase3);

    console.log('Terminamos na fase:', fase3);
  } catch(e) {
    console.log(e);
  }
}
executa();



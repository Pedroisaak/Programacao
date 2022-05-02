/* 
Promise é um objeto para tranformar o código assíncrono(fora de ordem) em um código síncrono(em uma ordem), ou seja,
caso precisamos que um função execute antes de outra função usamos o promisse, da qual substitui o callback, outra forma
de fazer porém defasada
*/


//criando um função para gerar um numero aleatório
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

//criando uma função que retorna uma mensagem em um determinado tempo
function esperaAi(msg, tempo) {
  //aqui declaramos o promisse, onde 'resolve' retornará a expressão sem erros e 'reject' com erros
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject(false);

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi('Conexão com o BD', rand(1, 3))
//logo executado, para linkarmos outra função usamos o 'then'
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da BASE', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Conectado com a BASE', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
  }).then(() => {
    console.log('Exibe dados na tela');
  })
  //caso tenha erro e retorne o 'reject' o código vai parar aqui, no 'catch'
  .catch(e => {
    console.log('ERRO:', e);
  })

                                          //METODOS ÚTEIS COM PROMISSES

//Promise.all => Executara uma promisse em um array ou objeto
const promises = 
[esperaAi('Promise 1', 3000),
esperaAi('Promise 2', 2000),
esperaAi('Promise 3', 500)
]

Promise.all(promises).then(function(valor){
  console.log(valor)
}).catch(function(erro) {
  console.log(erro)
})

//Promise.race => retornará o primeiro evento que for resolvido
Promise.race(promises).then(function(valor){
  console.log(valor)
}).catch(function(erro){
  console.log(erro)
})


function baixaPagina(){
  const emChace = true;

  if(emChace) {
    return Promise.resolve('Página em Cache')
  }else {
    return esperaAi('Baixei a página', 3000)
  }
}
//Promise.resolve => usado quando eu já tenho um valor e preciso que ele seja resolvido antes
baixaPagina()
.then(dadosPagina => {
  console.log(dadosPagina)
})
.catch(e => console.log(e))

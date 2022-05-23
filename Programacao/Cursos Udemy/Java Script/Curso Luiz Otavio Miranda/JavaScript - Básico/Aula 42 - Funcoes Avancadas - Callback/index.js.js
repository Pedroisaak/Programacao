/* Uma função callback é uma função passada a outra função como argumento, que é 
então invocado dentro da função externa para completar algum tipo de rotina ou ação. */

/* function greeting(name) {
  alert('Olá ' + name);
}

function processUserInput(callback) {
  var name = prompt('Por favor insira seu nome.');
  callback(name);
}

processUserInput(greeting); 

Ou seja, callback serve para ordenar, caso precise executar a funcao1 para depois 
executar a funcao2, utilizamos este callback

*/





//funcao para criar um numero aleatorio para o setTimeout
function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) +
    min;
  return Math.floor(num);
}

/* Como difinimos um setTimeout para a funcao ser executada e essa funcao que deve
ser executada antes das funcoes f2 e f3, iremos utilizar o callback */
function f1(callback) {
  setTimeout(function() {
    console.log('f1');
    if (callback) callback(); //caso tenha um callback, executara o callback
  }, rand());
}

function f2(callback) {
  setTimeout(function() {
    console.log('f2');
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function() {
    console.log('f3');
    if (callback) callback();
  }, rand());
}

/* aqui chamamos as funcoes com callback, mas este método é chamado de 'callback Hell',
visto que caso tenha muitos callback, o código fica extenso e confuso */
f1(function() {
  f2(function() {
    f3(function() {
      console.log('Ola Mundo')
    });
  });
});

/* Esta é a maneira da qual o professor recomenda, criando funcoes para cada callback */
f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log('Olá mundo!');
}

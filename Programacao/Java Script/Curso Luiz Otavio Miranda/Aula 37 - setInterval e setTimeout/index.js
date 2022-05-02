/*                              SETINTERVAL()
O método setInterval() oferecido das interfaces Window e Worker, repetem 
chamadas de funções or executam trechos de código, com um tempo de espera 
fixo entre cada chamada. Isso retorna um ID único para o intervalo, podendo 
remove-lo mais tarde apenas o chamando clearInterval() (en-US). 
Este metodo é definido pelo mixin WindowOrWorkerGlobalScope.

myInterval = setInterval(function, milliseconds);

setInterval(function () {element.innerHTML += "Hello"}, 1000);
}

                                SETTIMEOUT()
O método global setTimeout()define um cronômetro que executa uma função ou trecho 
de código especificado assim que o cronômetro expirar.

var timeoutID = setTimeout(function[, delay, arg1, arg2, ...]);
var timeoutID = setTimeout(function[, delay]);
var timeoutID = setTimeout(code[, delay]);

  setTimeout(() => {console.log("this is the first message")}, 5000);
  setTimeout(() => {console.log("this is the second message")}, 3000);
  setTimeout(() => {console.log("this is the third message")}, 1000);

*/



function mostrarHora () {           //Criando a funcao para pegar a hora local do Brasil
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function() {   //criando uma constante que recebera a funcao onde mostrara 'mostrarHora()' a cada '1000' milisegundos
        console.log(mostrarHora());
}, 1000);

setTimeout(function() {                  //setTimeout executa apenas uma vez
    clearInterval(timer);                //metodo para parar o intervalo especificado
},5000)

setTimeout(function() {
    console.log('Timer Terminado');
},6000)

console.log(timer)

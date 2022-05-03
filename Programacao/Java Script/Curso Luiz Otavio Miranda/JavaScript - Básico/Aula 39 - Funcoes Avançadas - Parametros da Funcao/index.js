function funcao() {
    console.log('Oie')
}

/* em outras linguagens, caso a funcao não passe parametros e 
você chame a funcao com argumentos ocorreria um erro, porém o js apenas ignora */
funcao('valor', 1, 2, 3, 4, 5, 6)  


/* Podemos utilizar na função padrão e no function express o metodo 'arguments' para 
verficar todos os valores na chamada de funcao, no arrow funcion não funciona 
Podemos também verificar por indicies, como 'arguments[10]'*/
function funcao1() {
    console.log(arguments)
}
funcao1('valor', 1, 2, 3, 4, 5, 6);  

/* Usando o 'arguments' em um laco for para fazer a soma dos argumentos */
function funcao2() {
    let total = 0
    for(let i of arguments) {
    total += i  
}
console.log(total)
}
funcao2( 1, 2, 3, 4, 5, 6);  


/* É possivel declarar menos parametros e enviar mais argumentos, o js apenas não 
irá exibir os argumentos sobressalentes */
function funcao3(a, b, c) {
console.log(a, b, c)
}
funcao3( 1, 2, 3, 4, 5, 6);  

/* Caso declare mais paramentros e envie menos argumentos, o js exibira os
 parametros sem argumentos como undefined */
function funcao4(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
}
funcao4( 1, 2, 3);


/* caso declaramos 2 parametros com retorno operador matematico
e chamamos a funcao com apenas um argumento, o valor retornará NaN pois um 
numero + undefined = NaN */
function funcao5(a, b) {
    console.log(a + b)
}
funcao5(1);

/* Para resolver, podemos declarar o parametro com um numero inicial como visto na funcao7 ou 
como na funcao 7 realizar um operador logico */
function funcao6(a, b) {
    b = b || 0;
    console.log(a + b);
}
funcao6(2); 

function funcao7(a, b = 0) {
    console.log(a + b);
}
funcao7(2, 5);

/* Podemos utilizar objetos nas funcoes, aqui no caso desestruturizando */
function funcao8 ({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
let pessoa = ({nome:'Pedro', sobrenome:'Isaak', idade:31}); 
funcao8(pessoa)
/* funcao8({nome:'Pedro', sobrenome:'Isaak', idade:31});  */  //maneira literal


//Também podemos com arrays
function funcao9 ([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao9(['Pedro', 'Isaak', 31]); 


/* Aqui usamos 3 parametros, porém utilizamos o operador rest '...' em numeros, 
assim indicar os dois primeiros atributos, podemos pegar o restante dos argumentos 
quando a funcao é chamada */
function conta(operador, acumulador, ...numeros){
   for(let numero of numeros) {
       if (operador ==='+') acumulador += numero;
       if (operador ==='-') acumulador -= numero;
       if (operador ==='*') acumulador *= numero;
       if (operador ==='/') acumulador /= numero;
   }
   console.log(acumulador);

}
conta('*', 1, 6, 2);

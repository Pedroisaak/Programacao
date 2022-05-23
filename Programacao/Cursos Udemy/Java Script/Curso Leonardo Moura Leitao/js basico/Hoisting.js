/*
*   Hosting nada mais é que içamento, "levar pra cima", conceito onde uma declaracão de variavel var feita depois de uma chamada da mesma, conta como se a variavel já fosse declarada,
*  O JS puxa a variavel declarada depois da chamada
*/

console.log('a =', a)       //chamamos a variavel a, porém não esta declarada, o resultado é undefined, porem em outras linguagens isso não seria possivel, visto a natureza de leitura de outras linguagens
var a = 2                   //a foi declarada aqui, O Js aproveitara esta declaracao de variavel na primeira chamada
console.log('a =', a)       //retornara a com o valor atribuido na linha 7

//console.log('b =', b)       // o mesmo não ocorre com let, o hosting apenas ocorre com var
let b = 2
console.log('b =', b)

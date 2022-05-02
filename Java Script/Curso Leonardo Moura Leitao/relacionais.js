/*
* o sinal de '=' sozinho atribui um valor em uma variavel,  
* o sinal de '==' relacional e questiona se o valor de uma variavel é igual a outra, dispensando o tipo,
* o sinal de '===' questiona se o valor de uma variavel é estritamente igual a outro valor, comparando o conteudo e o tipo da variavel
*/


console.log('01)', '1' == 1)            // questiona se o valor de '1' que é uma string é igual o valor de numero de 1, verdadeiro pois o '==' compara o valor e não o tipo
console.log('02)', '1' === 1)           // diferente do de cima, o operador '===' questiona se o valor é estritamente igual, falso pois comparando o valor e o tipo ambos sao diferentes
console.log('03)', '3' != 3)            // o operador '!=' questiona se um valor é diferente de outro, como não usamos o estrito '!==' o valor sará falso
console.log('04)', '3' !== 3)           // utilizando o estrito, '3' é diferente de 3 comparando os valores e tipos, sim, no caso true

console.log('05)', 3 < 2)             // o operador < compra se o valor é menor
console.log('06)', 3 > 2)             // o operador > compara se o valor é maior
console.log('07)', 3 <= 2)            // o operado <= equivalor é menor ou igual
console.log('08)', 3 >= 2)            // o operador >= equivale maior ou igual

const d1 = new Date(0)
const d2 = new Date(0)

console.log('09)', d1 === d2)                        // o valor será falso pois esta comparando enderecos de memorias e não valores e como ambos tem seu proprio endereco, falso
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() == d2.getTime())     // atribuimos a variavel o getTime que é a funcao onde pegamos o tempo real, como atribuimos o mesmo valor em ambas, o resultado será verdadeiro
const pessoa = [
    {nome : 'Pedro', idade : 31},
    {nome : 'joaquina', idade : 55},
    {nome : 'Marcos', idade : 70},
    {nome : 'Emerson', idade : 19},
    {nome : 'Marlene', idade : 26},
    {nome : 'Wallace', idade : 6}
]

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27]
/* 
function callback(valor) {
    valor.nome.lenght

} */


/* para usarmos o filter, um dos modos é fazer uma funcao de callback, onde o primeiro parametro 
le os valores, o segundo o indice e o terceiro retorna a array inteira */
function callbackFilter(valor, indice, array) {
    return valor.idade > 50;
}

/* Usamos o callback como parametro do filter, no caso, ira retornar quem tem idade > 50 */
const modoComFunction = pessoa.filter(callbackFilter)
console.log('Versao com function',modoComFunction)


//Versao com arrow function e a condicao já dentro do parametro, mais resumida
const filtraMaior10 = numeros.filter((arrValor) => (arrValor > 10))
const filtraIdade = pessoa.filter(obj => (obj.idade > 50 && obj.idade >50))
const filtraNome = pessoa.filter(obj => obj.nome.length > 6)
const filtraNomeTerminaA = pessoa.filter(obj => obj.nome.endsWith('a'))
console.log(filtraIdade)
console.log(filtraNome)
console.log(filtraNomeTerminaA)
console.log(filtraMaior10)

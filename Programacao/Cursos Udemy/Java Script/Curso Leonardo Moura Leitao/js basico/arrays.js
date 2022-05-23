/*
*array nada mais é que um vetor, como a linguagem é tipificamente fraca, ele suporta varios dados diferentes em uma mesma array mesmo não sendo recomendado
*
*
*/

const valores = [7, 8, 9, 10]           //declaracao de uma variavel array, utilizamos conchetes e separamos os valores por vírgula
console.log(valores[0], valores[3])     //busca os valores dentro da array, nas posiçoes 0 e 3

valores[4] = 10                         //adicionando mais um valor para a array
console.log(valores[4])
console.log(valores.length)             //busca a quantidade de index da array

valores.push({id: 3}, false, null, 'teste') // a funçao push adiciona outros valores na array
console.log(valores)

console.log(valores.pop())              //a funcao pop retira o ultimo valor da array 
console.log(valores)
delete valores[0]                       //a funcao delete retira o valor da array no indice indicado
console.log(valores)

console.log(typeof valores)             // o tipo da array é object
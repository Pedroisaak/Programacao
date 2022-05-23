const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27]

const pessoa = [
    {nome : 'Pedro', idade : 31},
    {nome : 'joaquina', idade : 55},
    {nome : 'Marcos', idade : 70},
    {nome : 'Emerson', idade : 19},
    {nome : 'Marlene', idade : 26},
    {nome : 'Wallace', idade : 6}
]

/* aqui estamos somando os numeros, no reduce, existe o parametro 'acumulador'
na qual é o primeiro parametro, se compara a um laco, podemos setar no final
da funcao o numero inicial do acumulador, no qual colocamos zero
*/

const total = numeros.reduce(function (acumulador, valor, indice, array){  
    acumulador +=  valor
    return acumulador
},0);

//Usando o acumulador para retornar valores pares, simulando o filter
const pares = numeros.reduce(function (acumulador, valor, indice, array){  
    if(valor % 2 == 0)  acumulador.push(valor);
    return acumulador
},[]);

//usando o acumulador para dobrar os numeros, simulando o map
const dobroNumeros = numeros.reduce(function (acumulador, valor, indice, array){     
    acumulador.push(valor * 2)
    return acumulador
},[]);

/* Retornando a pessoa mais velha, aqui tem dois returns o primeiro funciona
caso o valor for menor que o acumulador e refaz o laco, o segundo é caso
a idade do acumulador for menor e assim retorna o valor que será da pessoa
com mais idade */
const pessoaMaisVelha = pessoa.reduce(function (acumulador, valor,indice){
    if(acumulador.idade  > valor.idade)
    return acumulador; 
    return valor;
})
console.log(total)
console.log(pares)
console.log(dobroNumeros)
console.log(pessoaMaisVelha)
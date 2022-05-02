/* Aqui iremos unir os 3, usando filter para pegar os pares, o map para dobrar os pares
e o reduce para somar tudo em um valor */

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27]

//pares com filter
const pares = numeros.filter(function(valor) {
    if ( valor % 2 == 0)
    return valor
})
//dobro dos pares com map
const dobrarPares = pares.map(function(valor) {
    return valor * 2
})
//soma tudo com reduce
const somarTudo = dobrarPares.reduce(function (acumulador, valor) {
    acumulador = valor + acumulador
    return acumulador
})

/* exemplo do professor, chamou o restante das funcoes no final delas 
e reduciu com arrow function, interessante */
const exeploProfessor = numeros
    .filter(valor => valor % 2 == 0)
    .map(valor => valor * 2)
    .reduce( (acumulador, valor) => acumulador += valor
)

console.log(pares)
console.log(dobrarPares)
console.log(somarTudo)
console.log(exeploProfessor)




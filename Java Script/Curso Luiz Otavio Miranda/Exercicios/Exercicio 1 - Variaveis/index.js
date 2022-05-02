let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

let aux = varA

varA = varB
varB = varC
varC = aux

console.log(varA, varB, varC)

//Este exercicio foi necessário criar uma variavel temp para armazenar o valor incial de varA, visto que ele ja perde o valor quando atribuimos ela o valor de varB
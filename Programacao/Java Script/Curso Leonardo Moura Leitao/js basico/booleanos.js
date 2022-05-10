let isAtivo = false
console.log(isAtivo) //retorna o valor da variavel boolean

isAtivo = true
console.log(isAtivo) //retorna o valor da variavel boolean

isAtivo = 1
console.log(!isAtivo) //a espressão ! nega o valor logico da variavel
console.log(!!isAtivo) //a espressão !! nega duas vezes a expressão, retornando o valor original

console.log('os verdadeiros...')
console.log(!!3)                    //numeros inteiros retornam verdadeiro
console.log(!!-1)                   //numeros negativos retornam verdadeiros
console.log(!!' ')                  //espacos em brancos retornam verdadeiros
console.log(!!'texto')              //strings retornam verdadeiros
console.log(!!{})                   //objetos retornam verdadeiros
console.log(!![])                   //arrays retornam verdadeiros
console.log(!!Infinity)             //infinito retona verdadeiro
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)                    //zero retorna falso
console.log(!!'')                   //strings vazias retornam falso
console.log(!!null)                 //nulo retorna falso
console.log(!!NaN)                  //Not a Number retorna falso
console.log(!!undefined)            //Undefined retorna falso
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // utilizamos a expressao || (ou) para verficar se algum parametro é verdadeiros, caso um for, o valor é verdadeiro



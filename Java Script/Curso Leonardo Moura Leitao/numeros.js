const peso1 = 1.0
const peso2 = Number('2.0') //Usamos a funcao Number para atribuir um valor string para um valor number

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // funcao que verifica se a variavel é do tipo number e retorna boolean
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // tranforma um numero com muitas flutuacoes em apenas 2 flutuacoes
console.log(media.toString(2)) // tranforma média em binario
console.log(typeof media) //funcao que verifica o tipo da variavel
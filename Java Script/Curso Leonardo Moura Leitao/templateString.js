const nome = 'Lais'
const concatenacao = 'Olá ' + nome + '!' //concatenacao simples
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)// toda template utiliza o simbolo de crase para iniciar as string

console.log(`1 + 1 = ${1 + 1}`) //colocando uma expressao dentro de uma template string

const up = texto => texto.toUpperCase()
console.log (`Ei...${up('cuidado')}`) //revisar, não entendi
const escola = "Cod3r"

console.log(escola.charAt(4)) // Função para pegar em uma string uma posição e retonar a mesma, no caso a quarta posiçõa, lembrando que a contagem de caracteres começa do 0
console.log(escola.charCodeAt(3)) // busca a posição 3 da string e retorna o valor referente a tabela ASCII
console.log(escola.indexOf('r')) // busca um caractere específico em uma string e retorna o valor da posição

console.log(escola.substring(1)) // retorna o valor da string a partir da posição mencionada na função
console.log(escola.substring(0, 3)) // retorna um valor da string a partir da pocição 0 até a posição 3, porém a posiçao 3 não conta

console.log('Escola '.concat(escola).concat('!')) // concatena a expressão literal escola com a variavel escola e insere uma expressão literal no final
console.log(escola.replace(3, 'e')) // substitui uma letra da string na variavel escola na posição 3 por outra letra

console.log('Ana,Maria,Pedro'.split(',')) //dividi a explessão literal onde há virgula criando uma array
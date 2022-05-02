// undefined é um retorno na qual o valor de uma variavel não foi atribuida, null é ausencia de valor

let valor                   // não inicializada
console.log(valor)          // retornará undefined, já que o valor da variavel não foi atribuido

const produto = {}
console.log(produto.preco)  //criamos um objeto produto e tentamos buscar o preco do mesmo, como preco nao foi definido o valor, o retorno sera undefined

produto.preco = 3.50
console.log(produto)        //agora definimos na chave produto um valor em preco

produto.preco = undefined   //segundo boas praticas do professor, caso queira zerar o valor de uma variavel, usar o null, visto que undefined pode causar problemas
//delete produto.preco        uma outra maneira de retirar o valor de uma chave
console.log(produto)

produto.preco = null        //uma maneira de definir o preco do produto como sem valor
console.log(produto)



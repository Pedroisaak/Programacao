function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco
}
//criando o metodo desconto e setando que seja publico para todos os objetos pessoa
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));   
}
//criando o metodo aumento e setando que seja publico para todos os objetos pessoa
Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
    
}
const p1 = new Produto('Camisa', 79.99)
console.log(p1)
p1.desconto(10) //acessando o metodo mesmo fora do objeto, já que herdou o prototipe de produto que tem o método
console.log('Com desconto',p1)
p1.aumento(10)
console.log('Com aumento',p1)

const p2 = new Produto('Bermuda', 40)
console.log(p2)
p2.desconto(10)
console.log('Com desconto',p2)
p2.aumento(10) //acessando o metodo mesmo fora do objeto, já que herdou o prototipe de produto que tem o método
console.log('Com aumento',p2)

//Criamos um objeto sem ser pessoa, ou seja, ele não tem acesso aos metodos visto que estao dentro do objeto pessoa
const p3 = {
    nome : 'Sapato',
    preco : 30
}
//assim, faremos que o objeto p3 herde o prototipe de pessoa com o 'Object.setPrototypeOf'
Object.setPrototypeOf(p3, Produto.prototype)

console.log(p3)
p3.desconto(10) //mesmo nao sendo um objeto pessoa, agora ele herdou os metodos de pessoa
console.log('Com desconto',p3)
p3.aumento(10)
console.log('Com aumento',p3)
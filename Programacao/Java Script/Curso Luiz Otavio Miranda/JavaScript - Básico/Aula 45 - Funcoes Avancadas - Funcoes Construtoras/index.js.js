/* Funcoes construtoras tem a utilidade de servir de molde para a criação de objetos

Para construir objetos, funções construtoras precisam ser instanciadas pelo 
operador new. O this dentro delas se referencia ao objeto criado a partir delas.

No exemplo abaixo, a função Carro é uma função construtora, e carro1 é um 
objeto criado a partir do “molde” dessa classe, usando o operador new:

function Carro(marca, modelo, ano){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
}

const carro1 = new Carro('Charger', 'RT', 1970)

console.log(carro1)

. */



// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados
  // const ID = 123456;
  // const metodoInterno = function() {};

  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log(this.nome + ': sou um método');
  };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
p1.metodo();
p2.metodo();


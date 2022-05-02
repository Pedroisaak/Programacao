/* 
Segundo o professor, a maior diferença entre classe e as outras formas, é que classe não é um objeto e também quando
criamos uma classe, o prototype dela para as outras ficam acessíveis

Imagina uma casa. O arquiteto desenha uma planta para aquela casa - essa é a sua classe.
Se você tem esse blueprint você só precisa de um lote (que é a sua memória) e você tem que chamar construtores para 
fazer a casa a partir desse blueprint (objeto real dessa classe). E se você tiver essa planta, pode fazer quantas 
casas quiser se tiver mais lotes e chamar construtores para construí-la.

Pouco mais próximo do mundo da programação:
Você deve olhar para a classe como um tipo de dados. Como você tem um tipo de inteiro 
(de modo que é uma representação real do que ele armazena) e você pode atribuir algum valor a ele (como int i = 5) 
Você pode ter uma classe, por exemplo Point, que pode armazenar algum valor do tipo de dados Point 
como Ponto p = new Ponto(2,5); E ao escrever "new Point(2,5)" você está realmente chamando o construtor e 
passando alguns valores.*/


//criando a classe
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  //um método
  falar() {
    console.log(`${this.nome} está falando.`);
  }
}

//comparando com Constructor Function
function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}
//com constructor precisamos setar os prototypes, classes não
Pessoa2.prototype.falar = function() {
  console.log(`${this.nome} está falando.`);
};

//a saida é praticamente a mesma usando as duas maneiras
const p1 = new Pessoa('Pedro', 'Isaak');
const p2 = new Pessoa2('Marlene', 'Miranda');
p1.falar()
p2.falar()

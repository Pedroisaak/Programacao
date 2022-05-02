/*
Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.

Pegamos um exemplo, caso criemos a classe pessoa, e nesta classe existe um metodo 'nomeCompleto', todas as pessoas que
instanciarmos terão este 'nomeCompleto', se tivermos 1000 pessoas, 1000 'nomeCompleto' que fazem a mesma coisa serão criados 
juntos, isto poderá acarretar sobrecarregamento do programa, podemos assim criar um metodos 'nomeCompleto' que funcionara
para todos as pessoas criadas.

Date() é um prototype, voce pode chamar este metodo em qualquer função, visto que todas as funcão herdam este metodo
na sua criacao

*/

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

//Todas as pessoas instaciadas poderam usar este método
Pessoa.prototype.nomeCompleto = function() {
  return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Pedro', 'Isaak'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'Joaquina'); // <- Pessoa = Função construtora
const data = new Date(); // <-- Date = Função construtora

console.dir(pessoa1);
console.dir(data);

/*
const nome01 = 'Luiz';
const sobrenome01 = 'Miranda'                 //Aqui vemos uma repeticao para caso precise criar uma lista de pessoa, ficaria muito extensa conforme adicionamos mais
const idade01 = 25;                             //entao usamos o objetos, que nada mais sao uma variavel que adiciona varias variaveis relacionado a uma especie

const nome02 = 'Eduardo';
const sobrenome02 = 'Silva'
const idade02 = 21;

const nome03 = 'Pedro';
const sobrenome03 = 'Isaak'
const idade03 = 31;

*/

/*                                                            //DECLARACAO CLASSICA DO OBJETO
const pessoa01 = {                              //Abrimos com chaves e declaramos as variaveis relacionadas a uma pessoa
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25
}

console.log(pessoa01.nome);                     //Printamos pessoa01 utilizando o ponto seguido da variavel que queremos
console.log(pessoa01.sobrenome);
*/   




 /*                                                       //USANDO FUNCAO E OBJETO                            
function criaPessoa(nome, sobrenome, idade) {    //Criamos uma funcao com parametros de nome, sobrenome e idade
  return{                                        // Em seguida, ao invez de retornarmos um valor literal ou de uma variavel, abrimos chaves e criamos um return com objeto
    nome:nome,
    sobrenome:sobrenome,
    idade:idade
  };
}

const pessoa01 = criaPessoa('Luiz', 'Otavio', 25) //Criamos uma variavel que recebe a funcao criaPessoa e enviamos os argumentos para os parametros nome, sobrenome e idade
const pessoa02 = criaPessoa('Lais', 'Santos', 21)
const pessoa03 = criaPessoa('Pedro', 'Isaak', 31)
const pessoa04 = criaPessoa('Marco', 'Aurelio', 22)

console.log(pessoa01, pessoa02, pessoa03, pessoa04)
*/


const pessoa1 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25,

  fala() {                                                   //Colocamos uma funcao dentro do objeto, é conhecido como método
    console.log(`A minha idade atual é ${this.idade}.`);    //O metodo fala() retorna um console.log. 'This' relaciona o objeto pessoa1
  },

  incrementaIdade() {                                       //outro metodo para incrementarmos a idade do objeto, utilizamos 'this novamente para se referir a idade da pesssoa1
    this.idade++;                                             
  }
};

pessoa1.fala();                                             //chamando o metodo fala dentro do objeto pessoa1
pessoa1.incrementaIdade();                                  //chamando o metodo incrementaIdade do objeto pessoa1
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();



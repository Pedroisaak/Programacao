/* Construction Function usa muita herença de prototipos, um código muito acoplado, muitos programadores não gostam disto
então tem a opção de criar uma Factory Function com o prototype de escopo global, fugindo da herença */


const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  },
};

//Aqui atribuimos o objeto prototype criado em CriaPessoa para as funções do escopo global
/* const pessoaPrototype = {...falar, ...comer, ...beber} */
const pessoaPrototype = Object.assign({}, falar, comer, beber);

//criando uma Factory Function
function criaPessoa(nome, sobrenome) {
  //aqui vem a diferença, onde ao invez de colocarmos todas as nossas funcoes, retornamos um objeto prototype
  return Object.create(pessoaPrototype, {nome: { value: nome }, sobrenome: { value: sobrenome }
  });
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'A.');
console.log(p2);

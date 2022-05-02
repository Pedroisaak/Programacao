/* O termo "Herança" é muito usado para descrever que as características de um objeto são passadas para outro objeto. 
Assim como uma filha ou filho pode herdar características da sua mãe ou pai (geneticamente). Por isso estamos usando 
esse termo para descrever o comportamento desejado. Além disso, a maioria das literaturas, incluindo as documentações 
(como MDN) citam a palavra herança.

Vamos continuar usando o termo "Herança" até o final do curso, porém, Javascript não é uma linguagem que apresenta essa 
característica em específico, portanto não existe "herança" aqui. O que ocorre, na verdade, é "delegação". Esse seria 
o termo mais correto para descrever "Herança" em JS. */


function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
  this.preco -= quantia;
};

//criamos aqui camiseta, a ideia é que seja filha de produto, visto que camiseta é a especificidade da mesma
function Camiseta(nome, preco, cor) {
  //com a funcao 'call' herdamos os atributos da construtora Produto
  Produto.call(this, nome, preco);
  this.cor = cor;
}
/* Mesma herdando os atributos, não herdamos as funcoes que estao no prototype de produtos, para isso
 usamos o object.create, assim tendo acesso a todo conteudo do prototype de produtos */
Camiseta.prototype = Object.create(Produto.prototype);
/* Porém, quando usamos a expressão assim, ela herda também que a construtora é produto, mas queremos que a construtora
seja o proprio objeto, então para isto usamos a expressão abaixo */
Camiseta.prototype.constructor = Camiseta;
/* com isto, além de acessar as funcoes de Produto, podemos também edita-lo sem alterar as funcoes do Produto */
Camiseta.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function() {
      return estoque;
    },
    set: function(valor) {
      if (typeof valor !== 'number') return;
      estoque = valor;
    }
  });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 13, 'Plástico', 5);
caneca.estoque = 100;

console.log(caneca.estoque);
console.log(caneca);
console.log(camiseta);
console.log(produto);

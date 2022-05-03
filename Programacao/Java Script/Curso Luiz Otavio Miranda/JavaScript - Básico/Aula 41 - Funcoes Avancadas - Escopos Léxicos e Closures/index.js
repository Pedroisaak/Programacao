
                            //VAR
/* Nota-se que, apesar da variável x declarada dentro da função exemplo ser 
redeclarada novamente dentro do laço, as alterações feitas no laço se mantém 
mesmo após a conclusão. Já para a variável x declarada fora da função exemplo,
 o valor não é alterado. Podemos ver que o bloco não definiu o escopo da 
 variável x, mas o corpo da função sim. */

var x = 'foobar';

console.log(x); // → foobar

function exemplo() {
  var x = 'foo';
  console.log(x); // → foo
  for (var i = 0; i < 1; i++) {
    var x = 'bar';
    console.log(x); // → bar
  }
  console.log(x); // → bar
}

exemplo();

console.log(x); // → foobar


                            //LET
/*  A diferença de resultados se dá principalmente dentro da função, onde 
 agora é o bloco que delimita o escopo léxico e não mais a função. */

 let x = 'foobar';

console.log(x); // → foobar

function exemplo() {
  let x = 'foo';
  console.log(x); // → foo
  for (let i = 0; i < 1; i++) {
    let x = 'bar';
    console.log(x); // → bar
  }
  console.log(x); // → foo
}

exemplo();

console.log(x); // → foobar                           

                            //CONST
/*  A declaração de variáveis utilizando const declara uma variável com escopo de 
 bloco, porém, com uma referência fixa. Ou seja, uma variável const não pode 
 ser atribuída novamente após a declaração. Veja o exemplo abaixo:  */   
 
const x2 = 42;
const y2 = { name: 'foo' };

x2 = 42; // → Erro!
y2 = { name: 'bar' }; // → Erro!

/* É importante ter em mente que, apesar de nome poder dar a ideia de que essa 
declaração cria um valor constante, o que é constante é a referência da variável. 
Por isso, caso o valor seja um objeto, você pode mutá-lo sem qualquer erro. Veja: */

const y = { name: 'foo' };

y.name = 'bar';

console.log(y); // → {name: 'bar'}

y = { name: 'foobar' }; // Erro!

/* Algumas vezes podemos ser tentados "reutilizar" uma variável para representar dois 
conceitos diferentes. Essa prática deve ser evitada, pois leva a um código não 
efetivo e de difícil leitura. Por isso, sempre recomendo a utilização de const e 
let quanto estiver em um código que permita seu uso, ou seja, que utilize o ES6. 
Caso você tenha uma variável que não precise que seu valor seja reatribuído, faça 
de const a sua escolha padrão. Seu código fica mais limpo e declarativo. 
Caso a reatribuíção seja necessária, como é o caso de contadores, acumuladores e 
outros mecanismos de loops, utilize let. Também vai indicar que a variável somente 
é utilizada no bloco onde ela foi declarada, e não na função inteira. */
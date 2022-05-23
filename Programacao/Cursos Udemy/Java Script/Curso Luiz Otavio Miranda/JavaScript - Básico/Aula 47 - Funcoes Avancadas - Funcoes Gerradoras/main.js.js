/* Funcaoes geradoras nada mais são que funcoes que executam o codigo dentro em etapas, como se executasse
a primeira etapa e pausasse a execução */


//usasse 'function*' para declaracao
function* geradora1() {
  // Código qualquer ...
  yield 'Valor 1';      //executa primeiro
  // Código qualquer ...
  yield 'Valor 2';      //executa segundo
  // Código qualquer ...
  yield 'Valor 3';      //executa terceiro
}


const g1 = geradora1();
console.log(g1.next().value)  //chamando o primeiro yield
console.log(g1.next().value)  //como damos next chamaremos o segundo
console.log(g1.next().value)  //enfim o terceiro e ultimo


//Exemplo de contador infinito com a funcao geradora
function* geradora2() {
  let i = 0;

  while(true) {
    yield i;
    i++;
  }
}

const g2 = geradora2();
console.log(g2.next().value)  //chamando o primeiro yield com o valor 0
console.log(g2.next().value)  //como damos next chamaremos o segundo  com o valor 1
console.log(g2.next().value)  //enfim o terceiro e ultimo com o valor 2 e assim infinitamente


//aqui posso delegar que uma funcao geradora
function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}
//neste caso o yield* espera os resultados da geradora3 para assim o código ser executado
function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}
//resultado saira primeiro os yield da geradora3 e só assim os da geradora4
const g4 = geradora4();
for (let valor of g4) {
  console.log(valor)
}




function* geradora5() {
  yield function() {
    console.log('Vim do y1');
  };

  return function() {
    console.log('Vim do return');
  };

  // ...

  yield function() {
    console.log('Vim do y3');
  };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;


func1();
func2();


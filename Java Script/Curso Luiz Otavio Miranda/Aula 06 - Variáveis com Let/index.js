/* 
Declara uma variável local no escopo do bloco atual, opcionalmente iniciando-a com um valor.

let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual 
ela é usada. Isso é inverso da keyword var, que define uma variável globalmente ou no escopo inteiro de uma função, 
independentemente do escopo de bloco.
*/


// Não podemos criar variáveis com palavras reservadas
// Variáveis precisam ter nomes significativos
// Não pode começar o nome de uma variável com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos redeclarar variáveis com let
// NÃO UTILIZE VAR, UTILIZE LET.
let nomeCliente = 'Luiz';
nomeCliente = 'Otávio';


console.log(nomeCliente);

/* 
Redeclaração de uma mesma variável num mesmo escopo de bloco causa um TypeError.

if (x) {
  let foo;
  let foo; // Emite um TypeError.
}

No entanto, corpos de funções não possuem essa limitação!

function do_something() {
  let foo;
  let foo; // Isso funciona.
}

*/
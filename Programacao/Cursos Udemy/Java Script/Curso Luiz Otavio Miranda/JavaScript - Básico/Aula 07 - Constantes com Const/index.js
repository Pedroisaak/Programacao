/* 
Constantes possuem escopo de bloco, semelhantes às variáveis declaradas usando o palavra-chave let. O valor de uma 
constante não pode ser alterado por uma atribuição, e ela não pod ser redeclarada. 

A  declaração const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa
 que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.
*/

// String = Text | Number = Número
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultaDuplicado = resultado * 2;
console.log(resultaDuplicado);

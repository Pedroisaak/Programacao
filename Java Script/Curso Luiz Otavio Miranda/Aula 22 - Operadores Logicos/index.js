/*
* Operadores Lógicos
* && -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
* || -> OR -> OU
* ! -> NOT -> NÃO
*/
const expressaoAnd = true && true && true && true;      //Operador Logico 'e'. Na tabela verdade, todos o valores tem que ser iguais para verdadeiro, um valor diferente retorna falso
const expressaoOr = false || false || false || false;   //operador logico 'ou', Na tabela verdade, apenas um item verdadeiro para retorna verdadeiro
const usuario = 'Luiz'; // form usuário digitou
const senha = '123456'; // form usuário digitou

// //                      True                  False
const vaiLogar = usuario === 'Luiz' && senha === '12345';

console.log(!!true);

/*
O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments 
  e assim por diante), chamando uma função personalizada com instruções a serem executadas 
  para o valor de cada objeto distinto. 

for (variavel of iteravel) {
  declaração
}

*/

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
};

const nomes = ['pedro', 'bruno', 'henrique']

 //For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
 //For of - Retorna o valor em si (iteráveis, arrays ou strings)

 for (let i = 0; i < nomes.length; i++) {
   console.log(nomes[i]);
 }

 console.log('####');

 for (let i in nomes) {
   console.log(nomes[i]);
 }

 console.log('####');

 for (let valor of nomes) {               //for of nada mais que retorna os valores e não os indices como nos for anteriores
   console.log(valor);
 }

 console.log('####');

 nomes.forEach(function(valor, indice, array) {  // Funcao na qual o professor mostrou mas irá explicar nas aulas posteriores
   console.log(valor, indice, array);
 });

/* O objeto Map contém pares de chave-valor e lembra a ordem original da inserção das chaves. 
Qualquer valor (objetos e valores primitivos) podem ser usados como chave ou valor. 

Objetos vs. método Map()
Um Object é similar o Map - ambos permitem que valores sejam definidos a chaves, retornar esses valores, 
remover as chaves, e detectar se algo está armazenado na chave. Por esta razão 
(e porque não existem outras alternativas construídas), o Objeto tem sido usado como Map historicamente.

*Uma das maiores diferenças é que itera nos item na ordem em que foram inseridas inicialmente
*/

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
console.log(map1);

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b');

console.log(map1.size);
// expected output: 2
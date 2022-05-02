

                                        //SPLICE
/* Segundo o professor, o metodo splice é muito poderoso, podendo usar no lugar de outros varios atributos
tais como pop, shift, unshift, push entre outros*/

// podemos usar numeros negativos como parametros nos spice, -1 representa a ultima posicao do array
//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//                   
nomes.splice(-5, 1,'Luiz', 'Otávio');
console.log(nomes);

// nomes.splice(índice atual, delete, elem1, elem2, elem3);


                                       //CONCAT
/* concat nada mais é que a junção ou a concatenacao de 2 ou mais arrays */         
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9], 'Luiz');


// Segundo professor, é mais facil utilizar o spred '...' para concatenar arrays, como abaixo
const a4 = [...a1,...a2, ...[7, 8, 9], 'Luiz'];
console.log('CONCAT =>',a3);
console.log('CONCAT COM SPREED=>',a4);                         



                                        //Métodos dos arrays

/* concat() une dois arrays e retorna um novo array. */
var myArray = ['1', '2', '3']
myArray = myArray.concat('a', 'b', 'c');
console.log('CONCAT =>',myArray)
// myArray agora é ["1", "2", "3", "a", "b", "c"]

/* join(deliminator = ',') une todos os elementos de um array dentro de um string. */
var myArray = new Array('Vento', 'Chuva', 'Fogo');
var lista = myArray.join(' - '); // lista é "Vento - Chuva - Fogo"
console.log('JOIN =>',lista)

/* push() adiciona um ou mais elementos no fim de um array e retorna o comprimento resultante do array. */
var myArray = new Array('1', '2');
myArray.push('3'); // myArray é agora ["1", "2", "3"]
console.log('PUSH =>',myArray)

/* pop() remove o último elemento de um array e retorna esse elemento. */
var myArray = new Array('1', '2', '3');
var ultimo = myArray.pop();
console.log('POP =>',ultimo, myArray)
// myArray é agora ["1", "2"], ultimo = "3"

/* shift() remove o primeiro elemento de um array e retorna esse elemento. */
var myArray = new Array('1', '2', '3');
var primeiro = myArray.shift();
console.log('SHIFT =>',myArray, primeiro)
// myArray agora é ["2", "3"], primeiro é "1"

/* unshift() adiciona um ou mais elementos ao início do array e retorna o novo comprimento do array. */
var myArray = new Array('1', '2', '3');
myArray.unshift('4', '5');
console.log('UNSHIFT =>',myArray)
// myArray torna-se ["4", "5", "1", "2", "3"]

/* slice(start_index, upto_index) extrai uma seção de um array e retorna um novo array. */
var myArray = new Array('a', 'b', 'c', 'd', 'e');
myArray = myArray.slice(1, 4); // inicia no índice 1 e extrai todos os elementos
console.log('SLICE =>',myArray) // até o índice 3, retornado [ "b", "c", "d"]
/* 
splice(index, count_to_remove, addElement1, addElement2, ...) remove elementos de um array e (opcionalmente) 
o substitui, e retorna os itens que foram removidos do array. */
var myArray = new Array('1', '2', '3', '4', '5');
myArray.splice(1, 3, 'a', 'b', 'c', 'd');
console.log('SPICE =>',myArray)
// myArray é agora ["1", "a", "b", "c", "d", "5"]
// Este código iniciou no índice um (ou onde o "2" estava),
// removeu 3 elementos a partir dali, e então inseriu todos os elementos
// consecutivos em seus lugares.
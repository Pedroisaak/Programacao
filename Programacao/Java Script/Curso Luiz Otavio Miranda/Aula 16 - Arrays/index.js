//               0       1        2          3      4
let alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo 
alunos = 123;

console.log(typeof alunos);
console.log(alunos instanceof Array);   //para verificar se a variavel é uma array

// alunos.push('Luiza');
// alunos.push('Eduardo');

// console.log(alunos.slice(0, -2));      //slice, assim como visto nos arrays, podemos retornar apenas os indices indicados, ex: 0 até 3

// console.log(alunos[50]);

// delete alunos[1];            //deleta um indice deixando em branco
// console.log(alunos[1]);

// const removido = alunos.shift();
// console.log(removido);
// console.log(alunos);

// alunos.unshift('Fábio'); // Unshift adiciona no começo da array
// alunos.unshift('Luiza');


// alunos.push('Luiza'); // Push é mais usado do que o lenght para adicionar no fim
// alunos.push('Fábio');

// alunos[alunos.length] = 'Luiza';  // Lenght é uma funcao onde retorna o tamanho atual da array, podemos utiliza-la também para adiciona no fim um indice
// alunos[alunos.length] = 'Fábio';
// alunos[alunos.length] = 'Luana';

// alunos[0] = 'Eduardo'; // Altera a array indicando o indice
// alunos[3] = 'Luiza'; 

// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos[2]);


/*Já quando usamos const com valores mutáveis (como arrays e objetos), a variável continua sendo constante, porém os valores dentro do objeto poderão ser alterados. Isso acontece porque quando alteramos um valor interno de um objeto, não ocorre a reatribuição da variável com sinal de atribuição = (a variável continua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto.

Por este motivo, pode-se usar const com objetos mutáveis e ainda assim alterar seus valores internos. A única coisa que não vamos conseguir fazer é reatribuir o valor da variável.

Exemplos:

Isso pode

const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
 
Isso NÃO pode

const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable.
 */
/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/



const nums = [1, 2, 3]
const nums2 = nums            //Referenciamos o valor de nums dentro de nums2

console.log(nums2)            //os valores são iguais

nums.push(4)                  //Incrementamos um elemento em nums

console.log(nums2)          //o valor de nums2 também foi alterado, visto que array é por referencia e mutavel, se a referencia muda, nums2 também mudara



                                        //FAZENDO REALMENTE UMA COPIA DE VALORES MUTAVEIS
const a = [10,20,30]
const b = [...a]              //Como array usa referencia, utilizamos '[...a]' para realizamos uma copia de a, assim mesmo alterando a array a, os valores de b não serao afetados

console.log(b)
a.push(4)

console.log(b)  


/*
const a = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
};
const b = a;

b.nome = 'João';
console.log(a);
console.log(b);
*/

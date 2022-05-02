/*
* Curto Circuito é nada mais uma maneira de retornar um valor logico de maneiro simplificada, em outras linguagens, é preciso fazer estruturas de if else por exemplo para
* avaliar e retornar um valor lógico porém, no js, é possivel realizar essa operaçao de maneira simplificada
* 
* false -> valor literal logico de falso
* falsy -> valores que o js avalia como falso quando necessário
*   ->       0;
*   ->       "" . '', ´´              strings vazias
*   ->       null, undefined; 
*   ->       NaN
*/

console.log('Luiz' && 'Maria')              //retorna maria, pois foi o ultimo valor que ele processou, em operacoes logicas, o js para de processar quando já encontra um valor falso
                                            //como no caso os dois são verdadeiros, retornou o ultimo verdadeiro, assim não precisando de estruturas complexas para avaliar a operacao


console.log('Luiz' && undefined && 'Maria') // como 'undefined' é um falsy, retornou ele mesmo

console.log(0 || false || null || 'Pedro' || true)      // utilizando o operador lógico 'ou', retonou o primeiro valor verdadeiro encontrado, no caso 'Pedro'

const corUsuario = null                                 //exemplo como aplicar o curto circuito, caso o usuario não selecione nenhuma cor sera atribuito a cor preta
const corPadrao = corUsuario || 'preto'                 

console.log(corPadrao)
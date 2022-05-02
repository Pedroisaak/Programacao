/* 
*  Let nada mais é que outra forma de declarar uma variavel, os desenvolvedores do js virao que faltava um implemento no var para escopo de bloco porém decidiram nao mexer na variavel
* visto que poderia ocassionar maiores problemas para os sistemas em funcionamento, então criaram o let o qual a unica diferenca é que o escopo é global, de funcão e agora de bloco
*
*/

let numero = 1 
{
    let numero = 2                          // há prioridade de processamento o escopo menor para o mais amplo
    console.log('dentro =', numero)
}
console.log('fora =', numero)
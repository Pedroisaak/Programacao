/*                                              while
A declaração while cria um laço que executa uma rotina especifica enquanto a 
condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina. 

while (condição) {
  rotina
}
                                            do while
   A declaração do...while cria um laço que executa uma declaração até que o teste da condição for 
   falsa (false). A condição é avaliada depois que o bloco de código é executado, resultando que uma 
   declaração seja executada pelo menos uma vez.                                         

do
   statement
while (condition);

*/



/*                                  USANDO O WHILE
while nada mais é que um for com a diferença que ele executara laços dependendo de um valor verdadeiro
diferente do for que devemos instruir quantas vezes ele executa */

function random(min, max) {                                 //criando uma funcao que recebera dois numeros e gerará um aleatorio entre eles                                  
    
     const r = Math.random() * (max - min) + min;     
    return Math.floor(r);                                   //apenas arrendondando o valor
}

 let rand = random(10, 50)                                   //Como a variave rand será usada no while, devo incluir um valor, aproveitando já a funcao criada                                       

while (rand !== 11) {                                       //Executara até a variavel rand ser deixar de ser diferente de 11
    rand = random(10, 50);                                  //Usando a funcao para cada laco criar um numero entre 10 e 50
    console.log(rand);
}

console.log('####################')

/*                                 USANDO O DO WHILE
do while tem a diferença que ele já executa uma condicao previa antes de realizar o laco
*/  
let rand2;
do {
   rand2= random(10, 50)
   console.log(rand2)
} while (rand2 !== 39) {
    
}
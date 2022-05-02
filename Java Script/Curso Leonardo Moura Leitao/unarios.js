/*
*   Unarios são expressões que apenas manipulam um valor ou variavel, a + b será binario, visto que opera com 2 expressoes, a++ é um incremento ao valor de a utilizando apenas uma variavel
*
*   utilizando o incremento antes da variavel ou depois há diferenças, caso coloque ++a, a expressão passar a ter precedencia de processamento, diferente do pos-fixado a++
*/

let num1 = 1
let num2 = 2

num1++                              //usando o incremento de num, valia 1 agora passa a valer 2
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)      //exemplo de diferenças utilizando pre-fixados e pos fixados, primeiro é feito o procedimento de incremento do num1, ficando com o valor 2 
console.log (num1 ===num2)          // e depois é comparada com num2 que tem o valor 2, resultando em verdadeiro, logo após, num2 é decrementado
let num1 = prompt('Digite o primeiro numero')
let num2 = prompt('Digite o segundo numero')

num1 = Number(num1)     /*Todo numero que sai do prompt sai como string, usamos a funcao Number para tranforma-los em numeros para podermos soma-los depois */
num2 = Number(num2)

let resultado = num1 + num2


alert(`O resultado da soma dos valores é de ${resultado}`)        //chamanhdo o resultado da funcao41
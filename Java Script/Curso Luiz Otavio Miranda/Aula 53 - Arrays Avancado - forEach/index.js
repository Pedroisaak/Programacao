/* O forEach()método chama uma função para cada elemento em uma matriz. 

Se parece muito com o 'for of' porém forEach apenas funciona em arrays
*/

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27]

numeros.forEach(function(valor, indice, array){
    console.log(valor)
})
console.log(7/0)        // gera um retorno "Infinity" em outros linguagens printaria um erro
console.log("10"/ 2)    // mesmo usando string, o JS converte para numero e retorna o resultado, apenas JS consegue faze-lo pois tem um tipagem fraca
console.log("Show!" * 2)// ocorre um erro, pois na string, diferente do anterior, não existe numero para converter retornando NaN(Not a Number)
console.log(0.1 + 0.7)  // o resultado esperado seria 0.8 mas o retorno é de 0.79999, isso por que a especificação utilizada no JS preza a rapidez de processamento do que a precisão, caso fosse uma especificação de precisão, tornaria o processamento mais demorado
//console.log(10.toString(2)) ocorre um erro, pois o valor numerico deve ficar entre paranteses
console.log((10).toString(2)) // exe,plo correto visto o de cima
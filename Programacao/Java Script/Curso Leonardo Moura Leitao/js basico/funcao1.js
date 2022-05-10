function imprimirSoma (a, b) {            //declaramos uma funcao com dois atributos indefinidos
    console.log(a + b)                    //caso a funcao seja evocada, retornara o valor dos dois atributos somados            
}

imprimirSoma(2, 3)                        //evocamos a funcao imprimir soma dando valores aos atributos
imprimirSoma(2)                           //como nao definimos o valor do segundo atributo, o valor 2 sera somado a um undefined, retornando um Not a Number
imprimirSoma(2, 10, 4, 5, 7, 8, 9)        //outro exemplo da flexibilidade do js, podemos evocar a funcao com mais atributos do que declaramos e não dara nenhum erro, porém a funcao só ira somar os dois primeiros visto que a funcao foi determinada assim
imprimirSoma()                            //retornara not a number, visto que somou dois numeros undefined


//funcao com retorno
function soma (a,  b = 0) {               //podemos pre determinar o valor de um atributo na sua declaracao em um funcao
    return a + b
}

console.log(soma(2))
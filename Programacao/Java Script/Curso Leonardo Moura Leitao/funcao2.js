//armazenamento de uma funcao em uma variavel
const imprimirSoma = function (a, b) {          //podemos desta forma armazenas uma funcao em uma variavel
        console.log(a + b)
}

imprimirSoma(2, 3)

//armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {                        //arrow nada mais é a declaracao de uma variavel com funcao de uma maneira mais simplificada 
    return a + b
}

console.log(soma(2, 5))

//retorno implicito
const subtracao = (a, b) => a - b               //outra maneira mais simplifica de declaracao, ao invez de usar return, podemos utilizar o arrow
console.log(subtracao(3, 2))
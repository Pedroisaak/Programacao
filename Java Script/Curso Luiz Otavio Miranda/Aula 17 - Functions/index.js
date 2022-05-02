function soma(x, y) {                   //declaracao da funcao seguido do nome, posso declarar parametros ou não, mas como preciso somar, preciso declarar 2 variaveis
    const resultado = x + y             // que servirao como recipiente destes numeros
    return resultado                    //Preciso utilizar o return para que a function retorne um valor para mim
}

console.log(soma(2,2))                  //Printando a funcao soma enviando dois numeros para os dois parametros declarados anteriormente

//console.log(resultado)                um exemplo da qual tudo que declaramos dentro da soma fica isolado, assim não podemos chamar a variavel dentro dela diretamente 

const raiz = n => n ** 0.5;            // Uma maneira de declara funcao usando o metodo arrow, nada mais que uma maneira resumida de declaracao
console.log(raiz(9))
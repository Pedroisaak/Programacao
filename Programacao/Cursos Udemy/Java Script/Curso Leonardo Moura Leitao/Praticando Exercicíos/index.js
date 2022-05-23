/* Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.
     */
function saudacao(texto) {
    return console.log(texto + '!')
}
saudacao('Olá')

/* Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias. */
function idade(idade) {
    const diasIdade = idade * 365
    return console.log(`Voce tem ${idade} anos e já viveu ${diasIdade} dias`)
}
idade(31)

/* Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês. */
function remuneracao(horas, ganhoHora) {
    const remuneracao = horas * ganhoHora
    return console.log(`Você já ganhou neste mês R$${remuneracao}`)
}
remuneracao(10, 1.50)


/* Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês. */

function mes(numMes) {
    const mapeamento = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',]
    return console.log(mapeamento[numMes - 1])
}
mes(4)

/* Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo */
function maior(x, y) {
    const maior = x >= y ? 'Verdadeiro' : 'Falso'
    console.log(maior)
}
maior(0, 1)

/* Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...". */

function inverso(valor) {
    if (typeof valor !== 'boolean' && typeof valor !== 'number') return console.log('Insira booleanos ou números')
    const validador = typeof valor == 'boolean' ? !valor : valor * -1
    /* if(typeof valor !== Boolean && typeof valor !== Number)  */
    return console.log(validador)
}
inverso(true)

/* 
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação. */
function multiplica(x, y) {
    if (x < 0 || y < 0) return console.log('Insira números maiores que zero')
    if (!Number.isInteger(x) || !Number.isInteger(y)) return console.log('Insira numeros Interos')
    return console.log(Math.imul(x, y))

}
multiplica(5, 5)

/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado. */
function repete(valor, repeticao) {
    const valorArray = []
    for (let i = 0; i <= repeticao - 1; i++) {
        valorArray[i] = valor
    }
    console.log(valorArray)
}
repete(22, 6)

/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro. */
function retornaString(valor) {
    let string = ''
    for (let i = 0; i <= valor - 1; i++) {
        string += '+'
    }
    console.log(string)
}
retornaString(5)

/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
 */

function desestruturacao(array) {
    let primeiro = 0
    let ultimo = array.length - 1
    console.log(array[primeiro], array[ultimo])
}
desestruturacao([1, 2, 3, 4, 5, 8])

/* Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam
cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro. */
function copiaObjeto(objeto, deletaDoObjeto) {
    const novoObjeto = { ...objeto }
    delete novoObjeto[deletaDoObjeto]
    console.log(novoObjeto)
}
copiaObjeto({ nome: 'pedro', idade: 21 }, "nome")

/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro */
function retornaParametrosArray(valores) {
    const novaArray = []
    for (let valor of valores) {
        if (typeof valor == 'number') {
            novaArray.push(valor)
        }
    }
    console.log(novaArray)
}
retornaParametrosArray([1, 2, 3, "sadf", true, 'pedro'])

/* Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento */
function objetoParaArray(objeto){

    return console.log(Object.entries(objeto)
    )
}
objetoParaArray({ nome: 'pedro', idade: 21, sexo : 'masculino' })

/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares. */
function retornaPar(array) {
    const arrayPar =[]
    for(chave in array){
        if(chave % 2 == 0 && array[chave] % 2 == 0){
            arrayPar.push(array[chave])
        }
    }
    console.log(arrayPar)
}
retornaPar([1,1,2,3,4,5,5,5,8])

/* A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos
bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
é bissexto ou não. */
function bissexto(ano){
    if(ano % 400 == 0) return console.log(`O ano de ${ano} é bissexto`)
    if(ano % 4 == 0 && ano % 100 !== 0) return console.log(`O ano de ${ano} é bissexto`)
    return console.log(`O ano de ${ano} não é bissexto`)
}
bissexto(2000)

/* Escreva uma função que receba um array de números e retornará a soma de todos os números desse array */
function somaArray(array) {
    const total = array.reduce(function (acumulador, valor, indice, array){  
        acumulador +=  valor
        return acumulador
    },0)
    console.log(total)
}
somaArray([10,20,30,40])

/* Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas. */

function somaDespesa(objeto) {
    var total = 0
    for(let valor of objeto){
        
        total += valor.preco
    }
    console.log(total)
    return total
    }
    somaDespesa([{nome: "Jornal online", categoria: "Informação", preco: 89.99},
                {nome: "Cinema", categoria: "Entretenimento", preco: 150}]
    )
/* 
Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números. */
function calculaMedia(valores){
    let total = 0
    let lenght = 0
    for(let indice in valores){
    lenght++
    }
    total = valores.reduce(function(acumulador, valor){
        acumulador += valor 
        return acumulador
    },0)

    total = total / lenght
    console.log(total)
}
calculaMedia([5, 5, 5])

/* Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário. */
function calculaArea(base, altura) {
    const area = ((base * altura) /2).toFixed(2)
    console.log(area)
}
calculaArea(5, 2.3)

/* Criar uma função que receba um array de números e retorne o menor número desse array. */
function retornaMenor(array) {
    const menor = array.reduce(function(acumulador,valor){

            console.log(acumulador)
            console.log(valor)

    },0)
    
    console.log(menor)
}
retornaMenor([10, 5, 35, 65])
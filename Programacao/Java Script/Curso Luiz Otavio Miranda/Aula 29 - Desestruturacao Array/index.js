/*Desestruturacao é uma expressão JavaScript que possibilita extrair dados de arrays ou 
objetos em variáveis distintas*/ 

                                //DESESTRUTURACAO EM ARRAYS
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];      //Criando uma array numeros
const  [a, b] = numeros;                                                     //Aqui utilizamos a sintaxe de desestruturacao, onde atribuimos 2 variaveis que irao receber em ordem o primeiro e o segundo numero da array numeros                       

console.log(a , b)

const  [c, d, , ...resto] = numeros;                                        //'...' pode ser usado para retirar o resto dos valores da array, no caso extraimos os primeiros dois valores para 'c' e 'd' e utilizamos '', para pular 
                                                                            //o terceiro e '...resto' para extrair o restante dos numeros
console.log(c , d, resto)


                                //DESESTRUTURACAO EM OBJETOS

const pessoa = {                                                             //Criando um objeto pessoa
    nome : 'Pedro',
    idade : 31,
    endereco: {
        Rua : 'Francisco Derosso',
        Numero : 4385,
        Cidade : 'Curitiba',
    }
}


const {nome : nomeExtraido} = pessoa;                                       //Sintaxe de desestruturacao em objetos onde 'nome :' é a chave que estou buscando e 'nomeExtraido' é a variavel que criei para armazenar o valor de pessoa.nome
const {endereco : {Numero: NumeroExtraido, Cidade: CidadeExtraida}} = pessoa;   //Como endereco é um objeto dentro de objeto, usamos a sintaxe ao lado para extrairmos os valores
const {idade: idadeExtraida, ...restoObjeto} = pessoa;                      //Utilizando o '...' para extrair o resto tirando idade
console.log(nomeExtraido)
console.log(CidadeExtraida)
console.log(restoObjeto)

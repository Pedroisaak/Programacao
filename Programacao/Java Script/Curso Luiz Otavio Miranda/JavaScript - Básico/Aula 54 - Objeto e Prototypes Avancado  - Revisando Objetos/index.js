
                                            /* CRIANDO UM OBJETO DE MANEIRA LITERAL */

/* a declaracao de um objeto na sua forma literal se dá com '{}' e a atribuicao de valor nos atributos com ':' ao invez de '=' */
const pessoa = {
    
    nome: 'Pedro',
    sobrenome: 'Isaak',
    idade: 30
}

                                            /* ACESSANDO OS VALORES DO OBJETO */

//podemos acessar os valor inserindo o nome do objeto com '.' e o nome do atributo
console.log(pessoa.nome)
console.log(pessoa.sobrenome)

//Podemos também acessar com '[]' neste podemos ter um valor dinamico, como por exemplo uma variavel
const formaDinamica  = 'nome'
console.log(pessoa[formaDinamica])

                                            /* CRIANDO OBJETO COM CONSTRUTOR */

//Podemos declarar uma variavel com uma construtora, ou seja, usando 'new Object();'
const pessoa1 = new Object();
pessoa1.nome = 'Maria'
pessoa1.sobrenome = 'Joana'
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)

                                           /*  DELETAR UMA CHAVE DE UM OBJETO */

//Para deletar uma chave de um objeto se usa 'delete nomeobjeto.nomechave'
const pessoa2 = new Object();
pessoa2.nome = 'João'
pessoa2.sobrenome = 'Soarez'
console.log(pessoa2)
delete pessoa2.nome
console.log(pessoa2)

                                            /* FUNCOES DENTRO DE UM OBJETO */

//Podemos declarar funcoes dentro de objetos que após isto são chamados de métodos e apenas o objeto criador tem acesso
const pessoa3 = new Object();
pessoa3.nome = 'João'
pessoa3.sobrenome = 'Soarez'
pessoa3.idade = 31
//Metodo para retorna o nome da pessoa com uma string
pessoa3.falarnome= function(){
    console.log(`${this.nome} esta falando}`)
}
//Outro metodo para pegar a idade e diminuir com o ano atual e retorna data de nascimento
pessoa3.getDataNascimento = function(){
    const dataAtual = new Date();
    console.log(dataAtual.getFullYear() - this.idade)
}
pessoa3.falarnome()
pessoa3.getDataNascimento()

                                       /*  USANDO FOR PARA PEGAR OS VALORES */

//Posso usar o 'let in' para retornar todas as chaves de um objeto
for (let chaves in pessoa3){
    console.log(chaves)
}
//Let in para retornar o valor das chaves
for (let valor in pessoa3){
    console.log(pessoa3[valor])
}

                                /* FACTORY FUNCTIONS / CONTRUCTOR FUNCTIONS E CLASSE */

/* Estes tipos de objeto servem para criar um molde para criacao de varios objetos semelhantes, por exemplo cliente 
de uma loja, caso você faça todos os cliente criando objetos de maneira literal, pode ocasionar muita mao de obra e
pode esquecer de colocar algum atributo, porém com os moldes, se cria as chaves padroes que todos os cliente tem e apenas
altera o valor confome o cliente novo chega */

//FACTORY FUNCTION => Molde que retorna a funcao com os atributos e funcoes dentro dele
function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${nome} ${sobrenome}`
        }
    }
}
const factoryP1 = criaPessoa('Pedro', 'Isaak');
console.log(factoryP1.nomeCompleto());



//CONSTRUCTOR => Construtor usa o 'new' para criar um novo molde, a diferença é o uso do 'this'. 'this' se refere que
//a variavel que for criada com o 'this' se refere ao novo objeto
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const constructorP1 = new Pessoa('Pedro', 'Isaak');
console.log(constructorP1)
const constructorP2 = new Pessoa('Maria', 'Joaquina');
console.log(constructorP2)

                                 /* TRAVANDO UM OBJETO */

/* Podemos travar um objeto utilizando o 'Object.freeze(this);', assim, logo que o objeto for criado, não podemos alterar
nada dele */
function TravandoObjeto(nome, sobrenome) {
this.nome = nome;
this.sobrenome = sobrenome;
Object.freeze(this); 
}

//Objeto criado
const travandoObjeto = new TravandoObjeto('Marlene', 'Luchtenberg')
console.log(travandoObjeto)
//com o 'Object.freeze(this);' tentar alterar o nome não irá funcionar
travandoObjeto.nome = 'Cesar'
console.log(travandoObjeto)
                                                            
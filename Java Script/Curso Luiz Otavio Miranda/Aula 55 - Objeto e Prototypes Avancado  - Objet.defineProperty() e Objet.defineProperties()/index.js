                                        
/* Object.defineProperty define parametros de um atributo dentro de um objeto, se ele pode ser reescrito, configuravel, enumeral. Semelhante
ao que o objet.freeze() faz, porem este trava toda a edicao do objeto já Object.defineProperty define um atributo */


                                    // OBJET.DEFINEPROPERTY()
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    //aqui iremos definir as configuracoes do atributo estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,  //Pode mostrar a chave?
        value: estoque,    //de Qual valor?
        writable: false,    //Pode ser reescrito?
        configurable: false  //Pode deletar a chave?
    })

}

const p1 = new Produto('Camiseta', 30, 3);
//como 'enumerable' esta como true, a chave sera mostrada
console.log(p1)
//como o 'wirtable esta 'false', não podemos atribuir outro valor a estoque
p1.estoque = 5000;
console.log(p1)
//como 'configurable' esta 'false', não podemos deletar a chave 'estoque'
delete p1.estoque
console.log(p1)


                        // OBJET.DEFINEPROPERTIES()
//Podemos usar o  Object.defineProperties() para fazer varios ao mesmo tempo
function Produto2 (nome, preco, estoque) {
   
    //aqui iremos definir as configuracoes do atributo estoque
    Object.defineProperties(this,  {
        nome :{
            enumerable: true,  //Pode mostrar a chave?
            value: nome,    //de Qual valor?
            writable: false,    //Pode ser reescrito?
            configurable: false  //Pode deletar a chave?
        },
        preco : {
            enumerable: true,  //Pode mostrar a chave?
            value: preco,    //de Qual valor?
            writable: false,    //Pode ser reescrito?
            configurable: false  //Pode deletar a chave?
        },
        estoque :{
            enumerable: true,  //Pode mostrar a chave?
            value: estoque,    //de Qual valor?
            writable: false,    //Pode ser reescrito?
            configurable: false  //Pode deletar a chave?
        }
    })

}

const p2 = new Produto2('Calça', 24, 9);
//como 'enumerable' esta como true, a chave sera mostrada
console.log(p2)
//como o 'wirtable esta 'false', não podemos atribuir outro valor a estoque
p2.estoque = 5000;
console.log(p2)
//como 'configurable' esta 'false', não podemos deletar a chave 'estoque'
delete p2.estoque
console.log(p2)
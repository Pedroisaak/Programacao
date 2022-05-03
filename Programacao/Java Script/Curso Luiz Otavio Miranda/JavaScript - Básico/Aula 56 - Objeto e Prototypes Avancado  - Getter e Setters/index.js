/* As classes JavaScript contam com dois métodos especiais: um com o prefixo get que tem a função de retornar um valor, 
e outro precedido pela palavra set que serve para atribuir um valor. Ambos funcionam como se fossem uma propriedade da 
classe 

É bastante usado para validaçoes, uma operacao logo que o valor é insirido ou logs

Vídeo bem resumido: https://www.youtube.com/watch?v=XDk6tS1175M&ab_channel=TreinaWeb

se em uma fabrica tem um valor de estoque x, o cara coloca um numero errado, sem o get e set ele perderia o 
valor inicial de x, ou seja, o get protege o valor inicial caso algo de errado na proxima atribuição
*/


function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque 
    Object.defineProperty(this, 'estoque', {
        enumerable: true,  
        //pego o valor estoque que esta atribuido em estoquePrivado
        get: function(){
            return estoquePrivado;
        },
        //O Valor só mudará caso o novo valor seja numerico, caso não for, se mantém o valor incial
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log('Insira um numero')
                return
            }
            estoquePrivado = valor
        },
        configurable: true 
    })
}
const p1 = new Produto('Bermuda', 20, 8);
console.log(p1.estoque)
p1.estoque = 'sdfg'
console.log(p1.estoque)
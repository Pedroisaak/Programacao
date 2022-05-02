/*
Object.values  (retorna os valores da chave)
Object.entries  (retorna as entradas do objeto)
Object.getOwnPropertyDescriptor(o, 'prop')  (descreve a propriedade da chave)
Object.assign(des, any) (forma de copiar um objeto)
... (spread) (forma mais facil de copiar um objeto)
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = { nome: 'Camisa', preco: 1.8, material: 'Algodão' };

                                            //COPIANDO COM SPREED
/* Usando o spreed eu realmente copio o objeto, caso apenas atribua um objeto em outro, será apenas referencia, também posso
inserir novas chaves depois de copiar */
const copiaProdutoSpreed = {...produto, material:'Algodão'}
console.log('Copia com Spreed',copiaProdutoSpreed)
                                            //COPIANDO COM OBJET ASSIGN
const copiaObjetAssign = Object.assign({}, produto, {frete: 30})
console.log('Object.assign',copiaObjetAssign)
                                            //COPIANDO LITERALMENTE
const copiaLiteral = {nome : produto.nome, preco: produto.preco}
console.log('Copia Literal',copiaLiteral)
  
                                           //VERIFICANDO CHAVES COM OBJECT.KEYS
/* Este metodo retorna apenas as chaves do objeto */
console.log('Object.keys',Object.keys(produto))

                                          //VERIFICANDO OS VALORES DAS CHAVES COM OBJECT.VALUES
/* Este metodo retorna apenas os valores do objeto */
console.log('Object.values',Object.values(produto))

                                          //VERIFICANDO AS ENTRADAS DO OBJETO COM OBJECT.ENTRIES
/* Este metodo retorna as entradas do objeto */
console.log('Object.entries',Object.entries(produto))

for(let entry of Object.entries(produto)) {
  console.log('for com Object.entries',entry);
}

for(let [chave, valor] of Object.entries(produto)) {
  console.log('for com Object.entries e desestruturando',chave, valor);
}

                                          //TRAVANDO UM OBJETO COM FREEZE
const travandoObjeto = {
  nome : produto.nome, 
  preco: produto.preco
}
Object.freeze(travandoObjeto);
//tentei mudar, mas como setei o freeze, não vai acontecer a atribuição
travandoObjeto.nome = 'Produto2'
console.log('Trava o objeto',travandoObjeto)

                                          //VERIFICANDO AS PROPRIEDADES DE UMA CHAVE DE OBJETO
/* Já fizemos o objet.defineProperties onde setamos o que podemos fazer com a propriedade, o metodo Object.getOwnPropertyDescriptor
retorna as propriedades da chave  */
const verificandoPropriedades = {
nome : produto.nome, 
preco: produto.preco
}
console.log('Object.getOwnPropertyDescriptor',Object.getOwnPropertyDescriptor(produto, 'nome'))







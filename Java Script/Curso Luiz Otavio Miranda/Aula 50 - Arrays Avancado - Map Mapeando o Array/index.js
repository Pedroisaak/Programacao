const pessoa = [
    {nome : 'Pedro', idade : 31},
    {nome : 'joaquina', idade : 55},
    {nome : 'Marcos', idade : 70},
    {nome : 'Emerson', idade : 19},
    {nome : 'Marlene', idade : 26},
    {nome : 'Wallace', idade : 6}
]
/* 
tomar cuidado, pois como o objeto pessoa é por referencia, toda a mundança feita em outras
que pegam a referencia dele mudara a original */
const retornNome = pessoa.map(function(obj){
    return obj.nome;
});

//Deletando a chave nome do objeto pessoa
const removeChaveNome = pessoa.map(function(obj){
     delete obj.nome
     return obj
});

//adicionando uma chave ID e atribuindo o valor dela pelo indice do objeto
const addChaveID = pessoa.map(function(obj, indice) {
   obj.id = indice + 1
   return obj
})

/* exemplo de como não alterar os valores de pessoa, usamos o spred '...' para pegar todos os
valores da pessoa e atribuir em newobj */
const addChaveIDsemAlterarPessoa = pessoa.map(function(obj, indice) {
    const newobj = {...obj};
    newobj.id = indice
    return newobj
 })

console.log(retornNome)
console.log(removeChaveNome)
console.log(addChaveID)
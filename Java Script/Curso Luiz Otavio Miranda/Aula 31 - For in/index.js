/*
O laço for...in  interage sobre propriedades enumeradas de um objeto, na ordem original
 de inserção.  O laço pode ser executado para cada propriedade distinta do objeto.
 
for (variavel in objeto) {...
}

 */

const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Isaak',
    idade: 30
    
};

for(indexPessoa in pessoa){                 //For in nada mais que pega os indexes em ordem de criacao
    console.log(indexPessoa)
}

const frutas = ['Maca', 'Pera', 'Banana']

for(index in frutas){
    console.log(frutas[index])
}

//Objeto
var obj = {a:1, b:2, c:3};

//Para prop (propriedade) in obj (objeto) faça
for (var prop in obj) {
  // ctrl+shift+k (para abrir o console no mozilla firefox)
  console.log("obj." + prop + " = " + obj[prop]);
}

//A saída (output) deverá ser:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"


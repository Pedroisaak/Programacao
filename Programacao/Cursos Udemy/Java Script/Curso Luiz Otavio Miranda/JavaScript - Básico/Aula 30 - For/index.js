/*A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses 
e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações 
executadas em sequência. 

for ([inicialização]; [condição]; [expressão final])
   declaração

*/

/* console.log('linha 1')
console.log('linha 2')
console.log('linha 3')
console.log('linha 4')
console.log('linha 5')
console.log('linha 6') */

for(let i = 0; i <= 6; i++) {       //exemplo de laco for, ao invez de escrever na mão como acima, usamos o laco for para repetirmos ums expressao dentro de um parametro que estabelecemos
    console.log(`linha ${i}`)
}

const frutas = ['Maça', 'Pera', 'Banana', 'Melancia']
for(let z = 0; z < frutas.length; z++ ) {               //Usamos aqui o for para buscar o conteudo de 'frutas' pelo indice usando o 'z'
    console.log(`Indice : ${z} Fruta : ${frutas[z]}`)
}



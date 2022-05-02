// Escreva uma função que recebe 2 números e 
// retorne o maior deles

function max(x, y) {
    return x > y ? x : y;                       //usando operacao ternaria
}


const max2 = (x, y) => x > y ? x : y;          //Usando arrow function
console.log(max2(10, 5));

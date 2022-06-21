// tipo de dado 
// booleanos 

// conversão implícita
const numero = 456;
const numeroString = Number("456a");

//Number()
//String()
console.log(numero + numeroString)

// conversão explícita

console.warn(new Error('oi'))

let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

let telefone1 = 12341234;
console.log("O telefone é " + telefone1.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis
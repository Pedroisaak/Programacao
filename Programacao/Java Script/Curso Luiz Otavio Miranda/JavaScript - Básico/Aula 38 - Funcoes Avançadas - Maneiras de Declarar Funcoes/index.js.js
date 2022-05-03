// Declaração de função (Function hoisting)
falaOi();
function falaOi() {
  console.log('Oie');
}

// First-class objects (Objetos de primeira classe)
// Function expression - atribui uma funcão a uma variavel
const souUmDado = function() {
  console.log('Sou um dado.');
};
souUmDado();

// Arrow function - Há diferenças entre os dois acima, visto que este pode-se usar o 'this'
const funcaoArrow = () => {
  console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
  falar() {
    console.log('Estou falando...');
  }
};
obj.falar();

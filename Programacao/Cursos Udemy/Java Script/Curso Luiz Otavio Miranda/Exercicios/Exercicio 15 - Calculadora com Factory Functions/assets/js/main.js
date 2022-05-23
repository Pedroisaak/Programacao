const visor = document.querySelector('.visor')
const historico = document.querySelector('.historico')
const visorValue = visor.value

let agrupamento = []
let numeros = []
let operadores = []
var i = 0
var z = 0
var resultado = 0

// evento para capturar o click do mouse
document.addEventListener('click', function (e) {
  
  //cria o elemento p para o historico, com 10 p sai da div, arrumar, talvez uma array com shift?
  function criap() {
    const pNova = document.createElement("p"); 
    historico.appendChild(pNova); 
    return pNova
}  
  //pega o elemento botao clicado e ao mesmo tempo o valor setado no html
  const el = e.target;
  document.querySelector(".visor").value += el.value

/*   verifica se o valor pego é operador, caso sim, salva o operador na array 'operador' e o numero antes dele na arrya numeros
  foi necessario fazer um replace para tirar do numero o operador com o 'replace' */
  if (el.value === '+' || el.value === '/' || el.value === '*' || el.value === '-' || el.value === '**' || el.value === '√') {
    numeros[i] = document.querySelector(".visor").value
    numeros[i] = numeros[i].replace(el.value, '');
    operadores[i] = el.value
    document.querySelector(".visor").value = null
    i++
  }

  //verifica se o usuario quer o resultado, então rodamos todas as arrays com indices para realizar a conta
  if (el.value === '=') {
    
    numeros[i] = document.querySelector(".visor").value
    numeros[i] = numeros[i].replace(el.value, '');

    if (operadores[z] === '*') {
      resultado = numeros[z] * numeros[z + 1]
      console.log(resultado)
      document.querySelector(".visor").value = resultado
      z++
    }
    if (operadores[z] === '+') {
      resultado = parseFloat(numeros[z]) + parseFloat(numeros[z + 1])
      console.log(resultado)
      document.querySelector(".visor").value = resultado
      z++
    }

    if (operadores[z] === '-') {
      resultado = parseFloat(numeros[z]) - parseFloat(numeros[z + 1])
      console.log(resultado)
      document.querySelector(".visor").value = resultado
      z++
    }

    if (operadores[z] === '/') {
      resultado = parseFloat(numeros[z]) / parseFloat(numeros[z + 1])
      console.log(resultado)
      document.querySelector(".visor").value = resultado
      z++
    }

    if (operadores[z] === '**') {
      resultado = parseFloat(numeros[z]) ** parseFloat(numeros[z + 1])
      console.log(resultado)
      document.querySelector(".visor").value = resultado
      z++
    }

    if (operadores[z] === '√') {
      resultado =  Math.sqrt(parseFloat(numeros[z]))  
      console.log(resultado)
      document.querySelector(".visor").value = resultado
      z++
    }

    //cria uma p no historico com o resultado da conta
    const p = criap();
    p.innerHTML = `RESULTADO: ${resultado.toFixed(2)}`
    for(n of numeros && operadores) {
      console.log(n)
    }
  }

    //zera as arrays e deixa o visor com null
  if (el.value === 'C') {
    document.querySelector(".visor").value = null
    numeros = [];
    operadores = [];
  }
});






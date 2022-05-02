// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (segundo dígito)
Se o número digito for maior que 9, consideramos 0.
*/



const inputCPF = document.querySelector('.inputCPF');
const btnSubmit = document.querySelector('.submitCPF')
const divResultado = document.querySelector('.resultado')
btnSubmit.addEventListener('click', inicia)

//Inicia ao clicar no botão submit todas as funções
function inicia(e) {
    e.preventDefault();
    submit();
    validandoPrimeiroDigito();
    validandoSegundoDigito();
    validador()
 
}
//pega o valor digitado quando o usuário clica no botão
function submit() {
    const valorInput = inputCPF.value
    return valorInput
}

//valida o primeiro digito verificador do cpf
function validandoPrimeiroDigito() {
    const valorValidar = submit();
    const valorFormatado = new Object(valorValidar.replace(/\D+/g, '').split('').map(i => Number(i)))
    valorFormatado.splice(-2, 2)
    for (var i = 0, z = 9; i < valorFormatado.length; i++, z--) {
        valorFormatado[i] += valorFormatado[i] * z
    }
    let totalSoma = 0
    for (const value of valorFormatado) {
        totalSoma += value
    }
    const primeiroDigito = 11 - (totalSoma % 11)
    console.log('Primeiro Digito', primeiroDigito)
    return primeiroDigito
}
//valida o segundo digito verificador do cpf
function validandoSegundoDigito() {
    const valorValidar2 = submit();
    const valorFormatado2 = new Object(valorValidar2.replace(/\D+/g, '').split('').map(i => Number(i)))
    valorFormatado2.splice(-1, 1)
    for (var i = 0, z = 10; i < valorFormatado2.length; i++, z--) {
        valorFormatado2[i] += valorFormatado2[i] * z
    }
    let totalSoma2 = 0
    for (const value of valorFormatado2) {
        totalSoma2 += value
    }
    const segundoDigito = 11 - (totalSoma2 % 11)
    console.log('Segundo digito: ', segundoDigito)
    return segundoDigito
}
//caso o resultado dos digitos for maior que 9, o digito deve ser 0
function validador (){
let resultado = 0
let primeiro = validandoPrimeiroDigito()
if (primeiro > 9) {
    primeiro = 0
}
let segundo = validandoSegundoDigito()
if (segundo > 9) {
    segundo = 0
}
let valorInput = submit()
valorInput = valorInput.replace(/\D+/g, '').split('').map(i => Number(i))
const ultimoNumArray = valorInput[valorInput.length -1]
const penultimoNumArray = valorInput[valorInput.length -2]
//caso os digitos verificadores digitados pelo usuario forem igual ao calculo feito retornará verdadeiro o CPF
if (primeiro === penultimoNumArray && segundo === ultimoNumArray ) {
    resultado = 'CPF Válido'
    console.log(resultado)
    divResultado.innerHTML = resultado
    divResultado.style.backgroundColor = '#2DEAAE'
}else{
    resultado = 'CPF Inválido'
    console.log(resultado)
    divResultado.innerHTML = resultado
    divResultado.style.backgroundColor = '#E53535'
}
    return resultado
}

 




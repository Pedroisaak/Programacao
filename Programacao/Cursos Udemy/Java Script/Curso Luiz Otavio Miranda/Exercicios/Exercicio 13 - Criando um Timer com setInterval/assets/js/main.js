let seg = 0
let min = 0
let hora = 0

//seleção dom dos elementos
const cronometro = document.querySelector('.cronometro');
cronometro.innerHTML = (`0${hora}:0${min}:0${seg}`);
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

//funcao que seta o intervalo do cronometro, também inseri metodos para desabilitar o botão recem usado
function inicio() {
    intervalo = setInterval(Cronometro, 1000);
    iniciar.disabled = true;
    pausar.disabled = false;
    zerar.disabled = false;

}

//eventos de escuta dos quais caso o usuario clique nos botoes, executara as funcoes
iniciar.addEventListener('click', function (event) {
    inicio();
});

pausar.addEventListener('click', function (event) {
    pausarCronometro();
});

zerar.addEventListener('click', function (event) {
    zerarCronometro();

});

//funcao para adicionar zeros a esquerda quando o numero for menor que 0
function zeroAesquerda(num) {
    let zero = num <= 9 ? `0${num}` : num
    return zero
}

//condicoes e formatacao do cronometro
function Cronometro() {
    cronometro.style.color = 'black';
    if (seg <= 59) {
        seg++;
    } else {
        seg = 0
    }
    if (seg > 59) {
        min++
    }
    if (min > 59) {
        hora++
        min = 0

    } cronometro.innerHTML = (`${zeroAesquerda(hora)}:${zeroAesquerda(min)}:${zeroAesquerda(seg)}`);
}

//pausa o cronometro e deixa o texto do mesmo em vermelho
function pausarCronometro() {
    clearInterval(intervalo);
    cronometro.style.color = '#E53535';
    iniciar.disabled = false;
    pausar.disabled = true;
    zerar.disabled = false;
}

//zera as variaveis do cronometro para zerar o mesmo
function zerarCronometro() {
    clearInterval(intervalo);
    cronometro.style.color = 'black';
    iniciar.disabled = false;
    pausar.disabled = false;
    zerar.disabled = true;
    seg = 0;
    min = 0;
    hora = 0;
    cronometro.innerHTML = (`0${hora}:0${min}:0${seg}`);   
}

let dia = 0
let seg = 0
let min = 0
let hora = 0

let aux = 0

//seleção dom dos elementos
const cronometro = document.querySelector('.cronometro');
cronometro.innerHTML = (`00:00:00:00`);

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
const seletorDia = document.querySelector('.dias')
const seletorHoras = document.querySelector('.horas')
const seletorMinutos = document.querySelector('.minutos')
const seletorSegundos = document.querySelector('.segundos')
const enviaSeletor = document.querySelector('.enviar')
const mensagem = document.querySelector('.mensagem')
let music = new Audio('trilha.mp3')





//funcao que seta o intervalo do cronometro, também inseri metodos para desabilitar o botão recem usado
function inicio() {
    intervalo = setInterval(Cronometro, 1000);
    cronometro.innerHTML = (`${dia}:${hora}:${min}:${seg}`);
    iniciar.disabled = true;
    pausar.disabled = false;
    zerar.disabled = false;
    

}

//eventos de escuta dos quais caso o usuario clique nos botoes, executara as funcoes
enviaSeletor.addEventListener('click', function (event) {
    dia = seletorDia.value
    hora = seletorHoras.value
    min = seletorMinutos.value
    seg = seletorSegundos.value
    aux = seletorDia.value
    cronometro.innerHTML = (`0${dia}:0${hora}:0${min}:0${seg}`);
});


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
    if (seg <=59 && seg > 0 ) {
        seg--;
    }
    else if (seg == 0 && min > 0) {
        min--
        seg = 59
    }else if (hora > 0 && min == 0 && seg == 0){
        hora--
        min = 60
    }else if (dia > 0 && hora == 0 && min == 0 && seg == 0){
        dia--
        hora = 1
    }else if (dia == 0 && hora == 0 && min == 0 && seg == 0){
    mensagem.innerHTML = 'teste'
    return
}
    if (dia == 0 && hora == 0 && min < 5){
    music.play();

}
    cronometro.innerHTML = (`${zeroAesquerda(dia)}:${zeroAesquerda(hora)}:${zeroAesquerda(min)}:${zeroAesquerda(seg)}`);
}

//pausa o cronometro e deixa o texto do mesmo em vermelho
function pausarCronometro() {
    clearInterval(intervalo);
    cronometro.style.color = '#E53535';
    iniciar.disabled = false;
    pausar.disabled = true;
    zerar.disabled = false;
    music.pause()
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
    cronometro.innerHTML = (`0${dia}:0${hora}:0${min}:0${seg}`);   
}

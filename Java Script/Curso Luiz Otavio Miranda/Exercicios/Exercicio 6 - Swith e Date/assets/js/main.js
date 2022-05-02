
const form = document.querySelector('.form');
const descricao = document.querySelector('.descricao');

const data = new Date();


const dia = zeroAEsquerda(data.getDate());
let mes = data.getMonth() + 1;
const ano = zeroAEsquerda(data.getFullYear());
const hora = data.getHours();
const minutos = zeroAEsquerda(data.getMinutes());
let diaSemana = data.getDay();




function zeroAEsquerda(numero) {

    return numero >= 10 ? numero : `0${numero}`

}

switch (diaSemana) {
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Segunda-Feira';
        break;
    case 2:
        diaSemana = 'Terca-Feira';
        break;
    case 3:
        diaSemana = 'Quarta-Feira';
        break;
    case 4:
        diaSemana = 'Quinta-Feira';
        break;
    case 5:
        diaSemana = 'Sexta-Feira';
        break;
    case 6:
        diaSemana = 'Sábado';
        break;
}

switch (mes) {
    case 1:
        mes = 'Janeiro';
        break;
    case 2:
        mes = 'Fevereiro';
        break;
    case 3:
        mes = 'Março';
        break;
    case 4:
        mes = 'Abril';
        break;
    case 5:
        mes = 'Maio';
        break;
    case 6:
        mes = 'Junho';
        break;
    case 7:
        mes = 'Julho';
        break;
    case 8:
        mes = 'Agosto';
        break;
    case 9:
        mes = 'Setembro';
        break;
    case 10:
        mes = 'Outubro';
        break;
    case 11:
        mes = 'Novembro';
        break;
    case 12:
        mes = 'Dezembro';
        break;
}
console.log(dia, mes, ano, diaSemana, hora, minutos)

descricao.innerHTML += `<p><strong>${diaSemana} ${dia} de ${mes} de ${ano}<br>${hora}:${minutos}</p></strong>`;

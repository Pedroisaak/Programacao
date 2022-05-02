const container = document.querySelector('.container');
const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');                        //seleciona todos os paragrafos do html, como existem 4, a variavel é salva em um formato parecido com array

const estilosBody = getComputedStyle(document.body);            //sava todos os estilos do body
const corFundoBody = estilosBody.backgroundColor                //Extrai a cor utilizada no body


for (i = 0; i < ps.length; i++) {                         //Como o formato do 'ps' é parecido com o do array, aplicamos um for para cada indice de 'ps' para aplicarmos a cor 
ps[i].style.backgroundColor = corFundoBody;               //Aplica a mesma cor do body nos paragrafos
}
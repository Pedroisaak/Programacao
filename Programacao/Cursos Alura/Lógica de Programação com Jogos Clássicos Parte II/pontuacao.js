let pontosPassou = 0
let pontosColidiu = 0

function placar(){
    rect(230, 7, 40, 20);
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(pontosPassou, 250, 23);
    fill(color('green'));

}

function marcaPontos(){
    if(passou){
        pontosPassou += 1
        somDoPonto.play()
        voltaPosicaoInicialAtor()
        passou = !passou
    }

}

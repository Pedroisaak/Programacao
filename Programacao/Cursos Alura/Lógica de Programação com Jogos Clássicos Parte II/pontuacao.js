let pontosPassou = 0
let pontosColidiu = 0

function placar(){
    rect(100, 7, 40, 20);
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(pontosPassou, 120, 23);
    fill(color('red'));

    rect(370, 7, 40, 20);
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(pontosColidiu, 390, 23);
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

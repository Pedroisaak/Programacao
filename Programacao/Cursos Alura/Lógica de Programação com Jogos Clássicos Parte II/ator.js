//Código do ator
let yAtor = 366
let xAtor = 100
let colisao = false
let passou = false


function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 30, 30)
}

function movimentaAtor() {
    
    if (keyIsDown(UP_ARROW)) {
        yAtor -= 5;
    }
    if (keyIsDown(DOWN_ARROW) && yAtor <= 366) {
        yAtor += 5;
    }
}

function verificaColisao(){
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for(let i = 0; i < imagemCarros.length; i++){
       colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
       if(colisao){
        pontosColidiu += 1
        somDaColisao.play()
           voltaPosicaoInicialAtor()
       }
    }
}

function atravessou(){
    if(yAtor <= 10){
    passou = true
    }
}

function voltaPosicaoInicialAtor(){
    yAtor = 366
    xAtor = 100
}
function ePaisagem (largura, altura) {      
    if (largura === altura){
    return console.log('Modo Quadrado')
    }else
    return largura > altura ? true : false          //Operacao ternaria, caso largura maior retorna true, aprendi a fazer esse trem

}

const ePaisagem2 = (largura, altura) => largura > altura ? 'Paisagem' : 'Retrato'  //exemplo arrow function


console.log(ePaisagem2(1000, 1100))
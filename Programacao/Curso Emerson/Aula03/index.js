function clearSelected() {
    document.querySelectorAll('.card').forEach(element => {
        element.classList.remove('selected')
    })
}

function addSelected(movePlayer, movePC) {
    document.querySelector(`#${movePlayer}-player`).classList.add('selected')
    document.querySelector(`#${movePC}-pc`).classList.add('selected')
}

function getPCMove() {
    
}

function move(movePlayer) {
    clearSelected()
  

    const itens = ['rock', 'paper', 'scissor']
    const movePC = itens[Math.floor(Math.random() * itens.length)]
    addSelected(movePlayer, movePC)



    if (movePlayer === movePC) {
        document.querySelector('#winner').innerHTML = 'EMPATE'
        return
    }
    if (movePlayer === 'rock' && movePC === 'scissor' ||
        movePlayer === 'scissor' && movePC === 'paper' ||
        movePlayer === 'paper' && movePC === 'rock') {
        document.querySelector('#winner').innerHTML = 'GANHOU'
        return
    } else {
        document.querySelector('#winner').innerHTML = 'PERDEU'
        return
    }
}
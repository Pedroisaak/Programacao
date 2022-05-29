const winner = document.querySelector('#winner')

const elementoLoses = document.querySelector('#loses')
const elementoWins = document.querySelector('#wins')
const elementoDraws = document.querySelector('#draws')

var aux = 1

var wins= 0
var draws = 0
var loses = 0

elementoLoses.value = loses

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
  

    const itens = ['rock', 'paper', 'scissor', 'spock', 'lizard']
    const movePC = itens[Math.floor(Math.random() * itens.length)]
    addSelected(movePlayer, movePC)



    if (movePlayer === movePC) {
        document.querySelector('#winner').innerHTML = 'EMPATE'
        if(winner.textContent == 'EMPATE'){
            draws++
            elementoDraws.innerHTML = `DRAWS: ${draws}`
        }
        return
    }



    if (movePlayer === 'rock' && movePC === 'scissor' ||
        movePlayer === 'scissor' && movePC === 'paper' ||
        movePlayer === 'paper' && movePC === 'rock' ||
        movePlayer === 'rock' && movePC === 'lizard' ||
        movePlayer === 'lizard' && movePC === 'spock' ||
        movePlayer === 'spock' && movePC === 'scissor' ||
        movePlayer === 'scissor' && movePC === 'lizard' ||
        movePlayer === 'lizard' && movePC === 'paper' ||
        movePlayer === 'paper' && movePC === 'spock' ||
        movePlayer === 'spock' && movePC === 'rock') {
        document.querySelector('#winner').innerHTML = 'GANHOU'
        if(winner.textContent == 'GANHOU'){
            wins++
            elementoWins.innerHTML = `WINS: ${wins}`
        }
        return
    } else {
        document.querySelector('#winner').innerHTML = 'PERDEU'
        if(winner.textContent == 'PERDEU'){
            loses++
            elementoLoses.innerHTML = `LOSES: ${loses}`
        }
        return
    }




}






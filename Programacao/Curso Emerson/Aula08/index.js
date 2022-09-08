const cards = document.querySelectorAll('.card')
let finishedGame = false
function flipCard(event) {
    if(finishedGame) return
    
    const card = event.path[1]
    card.classList.add('flip')
}

(function shuffle() {
    cards.forEach(card => {
        const randomPosition = Math.floor(Math.random() * 8)
        card.style.order = randomPosition
    })
})()

cards.forEach(card => {
    card.addEventListener('click', (event) =>flipCard(event))
})
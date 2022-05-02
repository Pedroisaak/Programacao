/* a funcao recursiva nada mais é que um laço de repeticao como for ou while, a funcao é criada e ao final 
ela mesma se chama */

function recursiva (max) {
    if(max > 10){
        return
    }
    console.log(max)
    max++
    recursiva (max)
}

recursiva(0)
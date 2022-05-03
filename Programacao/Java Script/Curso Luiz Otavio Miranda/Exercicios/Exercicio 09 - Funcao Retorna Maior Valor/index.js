function retornaMaior(num1, num2){
    if(num1 > num2){
    return console.log(`O primeiro : ${num1} é o maior`)
    }else if (num2 > num1) {
    return console.log(`O segundo : ${num2} é o maior`)
    }else if (num2 === num1) {
    return console.log('Os Numeros são Iguais')
    }else {
    return console.log('ERRO, insira um numero')
    }
    
}


console.log(retornaMaior(1, 2))
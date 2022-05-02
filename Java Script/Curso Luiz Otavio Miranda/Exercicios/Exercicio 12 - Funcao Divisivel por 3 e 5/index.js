
                                //MODO CLASSICO
/* function divisivel(num) {
    if (num >= 0 && num <= 100) {
        if (typeof num === "number") {
            if (num % 3 == 0 && num % 5 == 0) {
                return console.log('FizzBuzz')
            } else if (num % 3 == 0) {
                return console.log('Fizz')
            } else if (num % 5 == 0) {
                return console.log('Buzz')
            } else {
                return console.log(num)
            }
        } else {
            return console.log('Digite um numero valido')
        }
    } else {
        return console.log('Digite um numero de 0 a 100')
    }
}

console.log(divisivel(15)) */


                                //MODO TERNARIO                    
const divisivelTernario = (num) => {                                            
                        if (typeof num === "number" && num >= 0 && num <=100) {     //criando um if em um bloco ternario onde checa se a variavel é um numero e se esta entre 0 e 100
        let numTemp  = num  % 3 == 0 && num % 5 == 0 ? 'FizzBuzz' : ''              //criei a variavel 'numTemp' para armazenar o valor gerados pelas operacoes ternarias
                    || num  % 3 == 0 ? 'Fizz' : ''
                    || num  % 5 == 0 ? 'Buzz' : ''
                    || num  % 3 !==0 && num  % 5 !==0 ? num : ''        
                   return numTemp                                                   //retorno o valor da variavel caso o if seja valido
                }else{
                   return console.log('Digite um numero valido')                    //retorno ist o caso o if seja falso
                }
}

 for (let i = 0; i <= 100; i++) {                                                   //criei um laco para percorer a funcao e retornar os valores conforme as condicoes
console.log(i,divisivelTernario(i))
} 
 
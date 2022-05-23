/* Aqui utilizamos o Symbol, Symbol cria um identificador unico a cada chamada, ou seja, se declaramos uma variavel
como Symbol, ela ficara protegida, pois se tentar setar um outro valor em uma variavel Symbol, ela nunca será aplicada
visto que são praticamente variaveis diferentes, isto serve para proteger o código de alguém tentar mudar sua variavel
de fora, já que qualquer set de valor não vai se aplicar a verdadeira variavel */

const _velocidade = Symbol() //Usando o Symbol para mascarar a variavel
class Carro {
    constructor(nome, velocidade){
        this.nome = nome
        this[_velocidade] = velocidade //fizemos a chamada do Symbol por conchetes
    }

    //como _velocidade esta mascarada com Symbol, podemos pegar o verdadeiro valor de _velocidade usando o get
    get velocidade() {
        return this[_velocidade]
    }
    //para alterar o valor com mascara de Symbol, podemos tratar o valor antes de atribuir com set
    set velocidade(valor) {
        if(typeof valor != 'number') return console.log("Insira Números")
        if(valor > 100 || valor < 0) return  ('Velocidade Acima da Capacidade do Carro')
        this[_velocidade] = valor;
    }

    acelerar() {
        
        if(this[_velocidade] >= 100) return
        this[_velocidade]++
        
    }
    freiar(){
        if(this[_velocidade] <=0) return
        this[_velocidade]--
    }
}

const carro1 = new Carro('Fusca', 0)
carro1.acelerar()
carro1.velocidade //tentamos mudar a velocidade porém, como a velocidade esta em Symbol, não será aplicada a variavel verdadeira, pois esta mascarada

console.log(carro1.velocidade)
console.log(carro1) //criara duas saidas, uma da velocidade alterada acima que não se aplica ao nosso código e ao lado vemos nossa verdadeira variavel protegida com o valor original
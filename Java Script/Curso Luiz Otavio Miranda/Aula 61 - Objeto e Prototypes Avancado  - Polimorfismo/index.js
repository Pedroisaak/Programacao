/* Definimos Polimorfismo como um princípio a partir do qual as classes derivadas de uma única classe base são
 capazes de invocar os métodos que, embora apresentem a mesma assinatura, comportam-se de maneira diferente para 
 cada uma das classes derivadas

 O Polimorfismo é um mecanismo por meio do qual selecionamos as funcionalidades utilizadas de forma dinâmica por 
 um programa no decorrer de sua execução
 
Por exemplo: podemos assumir que uma bola de futebol e uma camisa da seleção brasileira são artigos esportivos,
 mais que o cálculo deles em uma venda é calculado de formas diferentes
 */

 //Criando a classe pai, ela passara futuramente todos os atributos e metodos para as outras classes
 function Conta (agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo
 }

 Conta.prototype.sacar = function(valor) {
     if(this.saldo < valor)  return console.log('Saldo Insuficiente')
     this.saldo -=  valor
     console.log(`Você sacou ${valor} e seu saldo atual é de ${this.saldo}`)
 }

 Conta.prototype.depositar = function(valor) {
     this.saldo +=  valor
     console.log(`Você depositou ${valor} e seu saldo atual é de ${this.saldo}`)
 }

 Conta.prototype.verSaldo = function() {
     console.log(`Agencia: ${this.agencia} | Conta Corrente: ${this.conta} | Saldo: R$${this.saldo}`)
 }



//Criando a classe ContaCorrente que será filho da classe conta
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo) //Aqui estou passando todos os metodos escritos de Conta para ContaCorrente
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype) //passando o prototype de Conta para ContaCorrente
ContaCorrente.prototype.constructor = ContaCorrente      //devemos reatribuir o construtor de ContaCorrente, ja que como puxamos o prototype inteiro de Conta, o construtor de ContaCorrente fica como se fosse da Conta

//pegando a funcao sacar já construida de Conta e colocamos no prototype de ContaCorrente, assim podemos alterar alguns parametros de sacar() sem alterar o original de Conta, como por exemplo o parametro limite de sacar o qual não existe em conta
ContaCorrente.prototype.sacar = function(valor) {
    if((this.saldo + this.limite) < valor)  
    return console.log(`Saldo Insuficiente, o seu limite de saque é: ${this.saldo + this.limite}`)
    this.saldo -=  valor
    console.log(`Você sacou ${valor} da sua Conta Corrente e seu saldo atual é de ${this.saldo}`)
}



//Criando a classe ContaPoupança que será filho da classe conta
function ContaPoupança(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo)
    this.saldo = saldo
}

ContaPoupança.prototype = Object.create(Conta.prototype)
ContaPoupança.prototype.constructor = ContaPoupança


ContaPoupança.prototype.sacar = function(valor) {
    if(this.saldo < valor)  
    return console.log(`Saldo Insuficiente, o seu limite de saque é: ${this.saldo + this.limite}`)
    this.saldo -=  valor
    console.log(`Você sacou ${valor} da sua Poupança e seu saldo atual é de ${this.saldo}`)
}





 const c1 = new Conta(1234, 98765, 100)
 c1.sacar(200)
 c1.depositar(120)
 c1.verSaldo()
 console.log(c1.saldo)

 const cc1 = new ContaCorrente(321, 111,400,100)
 console.log(cc1)
cc1.sacar(300)


 const cp1 = new ContaPoupança(456, 222, 1000)
 
 cp1.sacar(1000)    
 

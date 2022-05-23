const inputCPF = document.querySelector('.inputCPF');
const btnSubmit = document.querySelector('.submitCPF')
const divResultado = document.querySelector('.resultado')
btnSubmit.addEventListener('click', inicia) 

class ValidadorCPF {
    constructor(cpf) {
        this.cpf = cpf
    }
    LimpaCPF() {
        this.backupcpf = this.cpf.replace(/\D+/g, '').toString()
        this.cpf = this.cpf.replace(/\D+/g, '').split('').map(i => Number(i))
        return
    }
    validandoPrimeiroDigito() {
        this.primeiroDigito = [...this.cpf]
        this.primeiroDigito = this.primeiroDigito.splice(0, 9)
        let regressivo = 10
        const total = this.primeiroDigito.reduce((ac, val) => {
            ac += (regressivo * Number(val));
            regressivo--;
            return ac;
        }, 0);
        const resultadoPrimeiroDigito = 11 - (total % 11);
        return resultadoPrimeiroDigito > 9 ? '0' : resultadoPrimeiroDigito;
    }
    validandoSegundoDigito() {
        this.SegundoDigito = [...this.cpf]
        this.SegundoDigito = this.SegundoDigito.splice(0, 10)
        let regressivo = 11
        const total = this.SegundoDigito.reduce((ac, val) => {
            ac += (regressivo * Number(val));
            regressivo--;
            return ac;
        }, 0);
        const resultadoSegundoDigito = 11 - (total % 11);
        return resultadoSegundoDigito > 9 ? '0' : resultadoSegundoDigito;
    }
    validaCPF() {
        const num1 = this.validandoPrimeiroDigito()
        const num2 = this.validandoSegundoDigito()
        this.cpfNovo = new Object(this.cpf)
        this.cpfNovo = this.cpfNovo.toString().replace(/\D+/g, '').slice(0, 9)
        this.cpfNovo = this.cpfNovo + num1 + num2
        if (this.cpfNovo === this.backupcpf) {
            divResultado.innerHTML = 'CPF Válido'
            divResultado.style.backgroundColor = '#2DEAAE'
        } else {
            divResultado.innerHTML = 'CPF Inválido'
            divResultado.style.backgroundColor = '#E53535'
        }
    }
}
function inicia(e){
    e.preventDefault();
    submit()
    const cpf1 = new ValidadorCPF(submit())
    cpf1.LimpaCPF()
    cpf1.validaCPF()
}
function submit() {
    const inputValor = inputCPF.value
    return inputValor
}






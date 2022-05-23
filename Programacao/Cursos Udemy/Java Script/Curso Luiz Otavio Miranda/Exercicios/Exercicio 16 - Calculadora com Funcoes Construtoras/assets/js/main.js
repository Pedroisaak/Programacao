function Calculadora() {

    this.visor = document.querySelector('.visor');
    this.historico = document.querySelector('.historico')
  
    this.inicia = () => {
        this.clicaBotao();
    }
    //Funcao chamada dos botoes
    this.clicaBotao = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('botao')) {
                this.addNumDisplay(el)
            }
            if (el.classList.contains('reset')) {
                this.limpaVisor()
            }
            if (el.classList.contains('resultado')) {
                this.resultadoConta()
            }
            if (el.classList.contains('apagar')) {
                this.apagarNumero()
            }
        })
    }

    //adiciona o botao no visor
    this.addNumDisplay = el => {
        this.visor.value += el.value;
    };
    //da clear no visor
    this.limpaVisor = () => {
        this.visor.value = ''
    }
    //apaga um numero do visor
    this.apagarNumero = () => {
        this.visor.value = this.visor.value.slice(0, -1);
    }
    //realiza a conta no momento que o usuario clicar no botao '='
    this.resultadoConta = () => {
        //Usando try para capturar erros
        try {
            //verificar por que ao quadrado não funciona
            const conta = eval(this.visor.value);
            if (!conta) {
                alert('Conta inválida');
                return;
            }
            this.visor.value = conta;
            this.criap(conta);
        } catch (e) {
            alert('Conta inválida');
            return;
        }
    }
    //Cria p na div historico com o resultado
    this.criap = (resultado) => {
        const pNova = document.createElement("p"); 
        this.historico.appendChild(pNova); 
        pNova.innerText += `RESULTADO: ${resultado.toFixed(2)}`
        return pNova
    }
}

const calc1 = new Calculadora();
calc1.inicia();


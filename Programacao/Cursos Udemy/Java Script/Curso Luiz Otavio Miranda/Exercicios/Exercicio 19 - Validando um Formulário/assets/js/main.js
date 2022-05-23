class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos() // inicia logo de cara eventos
    }

/* criamos aqui um metodo que ao clicar em enviar ele chamara o metodo handleSubmit, que verifica alguns 
parametros antes de enviar */
    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        });
    }

/* Metodo de checar antes de enviar    */
    handleSubmit(e){
        e.preventDefault();
        /* o retorno de cada metodo é uma variavel booleana, checara se no final da triagem do valor ele ainda 
        se manteam 'true', ou seja, passou pela triagem, caso todos metodos retornem true, o formulario será enviado  */
        const camposValidos = this.validaCampos(); 
        const nomeValido = this.validaNome();
        const cpfValido = this.validaCPF();
        const senhaValido = this.validaSenha();
        if(camposValidos && nomeValido && cpfValido && senhaValido){
            alert('Formulário enviado.');
            this.formulario.submit();
    }
}

    validaCampos() {
        //variavel criada como uma flag, retorna false se em uma das triagens ele não passe
        let valid = true
        //cria um laço que deleta os erros para não ficarem se duplicando
        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
          }
        //seleciona todas as classes que contem 'valida' em seu nome
        const campoValida = this.formulario.querySelectorAll('.valida')
        //verifica se todos os inputs com a classe 'valida' esta vazios
        for (let campo of campoValida) {
            const label = campo.previousElementSibling.innerText
            if (!campo.value) {
                this.criaErro(campo, `O ${label} precisa ser preenchido`)
                valid = false
            }
        }
        return valid
    }

    validaNome() {
        let valid = true
        this.nome = this.formulario.querySelector('.nome')
        //expressao regular que inclui todos os caracteres fora letras minusculas ou maiusculas
        const regexLetra = /[^a-zA-Z]/g;
        this.nomeValidar = this.nome.value
        //verifica se no valor do input nome existe algum caractere fora letras minusculas ou maiusculas
        if (this.nomeValidar.toString().match(regexLetra)) {
            this.criaErro(this.nome,'Insira um nome válido com apenas letras')
            valid = false
        }
        return valid
    }

    validaUsuario(){
        let valid = true
        this.usuario = this.formulario.querySelector('.usuario')
        //expressao regular que inclui todos os caracteres fora letras minusculas ou maiusculas e numeros
        const regexLetraENumero = /[^a-zA-Z0-9]/g;
        this.usuarioValidar = this.usuario.value
        //verifica se no valor do input nome existe algum caractere fora letras minusculas ou maiusculas e numeros
        if(this.usuarioValidar.toString().match(regexLetraENumero)){
            this.criaErro(this.usuario,'O Usuário só pode ter letras e números')
            valid = false
        }
        if(this.usuarioValidar.length < 3 || this.usuarioValidar.length > 12) {
            this.criaErro(this.usuario,'O Usuário deve ter entre 3 à 12 caracteres')
            valid = false
     }  
        return valid
    }

    validaSenha(){
        let valid = true
        this.senha = this.formulario.querySelector('.senha')
        this.senhaValidar = this.senha.value
        this.repetirsenha = this.formulario.querySelector('.repetirSenha')
        this.repetirsenhaValidar = this.repetirsenha.value
        //verifica se o tamanho da senha insirida no input
        if(this.senhaValidar.length < 6 || this.senhaValidar.length > 12){
            this.criaErro(this.senha, 'Senha precisa estar entre 6 e 12 caracteres.');
         valid = false
        }
        //verifica se as senhas são iguais
        if(this.senhaValidar !== this.repetirsenhaValidar){
            this.criaErro(this.senha,'As senhas devem ser iguais')
            valid = false
        }
        return valid
    }
    validaCPF(campo){
        let valid = true
        this.cpf = this.formulario.querySelector('.CPF')
        this.cpfValidar = this.cpf.value
        /* Aqui foi reaproveitado o validador de CPF que fizemos no exercicio anterior e inserimos e instanciamos 
        a sua classe na expressão abaixo */
        const validador = new ValidaCPF(this.cpfValidar)
        
        if(!validador.valida()) {
            this.criaErro(this.cpf, `O CPF precisa não é valido`)
            valid = false
        }else{
            console.log('CPF Válido.')
        }
        return valid
    }
    
   /* Metodo para cria um elemento de erro logo abaixo do input, ele recebe os parametros de campo, o qual seria o campo
   com o erro e a mensagem para tratar o erro */

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
      }
}

const f1 = new ValidaFormulario()





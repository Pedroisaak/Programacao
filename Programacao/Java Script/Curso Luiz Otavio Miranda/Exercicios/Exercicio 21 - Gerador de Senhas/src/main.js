
import 'core-js/es/array'
import './assets/css/style.css';

const inputQtdCaracteres = document.querySelector('.numeroDeCaracteres')
const resultado = document.querySelector('.resultado')
const formulario = document.querySelector('.formulario')

class GeradorDeSenha {
    constructor(){
        this.eventos();
    }

    eventos(e){
        formulario.addEventListener('submit', e => {
            e.preventDefault()
            this.valoresCheckbox();
            this.geraSenha();     
        }); 
    }

    geraSenha(){
        //usei aqui variaveis ao invez de expressoes regulares para maior controle
        this.number = "0123456789",
        this.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXTZ",
        this.lowercase = "abcdefghiklmnopqrstuvwxyz"
        this.simbolos = "*+?^$&()-/!;~[]#@_"

        this.ValoresCheckbox = this.valoresCheckbox()
        this.ValoresCheckbox = this.ValoresCheckbox.toString()
        this.ValoresCheckbox = this.ValoresCheckbox.replace(/,/g,' + ')
        this.ValoresCheckbox = eval(this.ValoresCheckbox)//pegos todos o valores checados e transformo de string para uma notacao que pode ser usada como string
        
        //gera usando o metodo crypto, 'wishlist' é os caracteres que poderam ser gerados
        const gerador = (length , wishlist) =>
            Array.from(crypto.getRandomValues(new Uint32Array(length)))
              .map((x) => wishlist[x % wishlist.length])
              .join('')

        resultado.innerHTML = (gerador(inputQtdCaracteres.value, this.ValoresCheckbox))
        

    }
    /* aqui selecionei pelo DOM todos os elementos 'checkbox' e caso o usuario envie o formulario, aqui irei rastrear os
    marcados e retornar o valor do elemento marcado para uma array */
     valoresCheckbox() {
        const checkboxValues = formulario.querySelectorAll(".checkbox");
        const arrayValoresCheckbox = []
        for(let i = 0; i < checkboxValues.length ; i++){
          if(checkboxValues[i].checked) {
          arrayValoresCheckbox.push(checkboxValues[i].value) 
          }
          } 
        return arrayValoresCheckbox
    }
}

const s1 = new GeradorDeSenha


  


  

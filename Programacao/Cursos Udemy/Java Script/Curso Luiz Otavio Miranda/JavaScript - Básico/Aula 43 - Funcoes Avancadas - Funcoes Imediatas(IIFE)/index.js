/*      IIFE -> Immediately Invoked Function Expression

Uma expressão de função JavaScript imediatamente invocada é uma função definida 
como uma expressão e executada imediatamente após a criação

Como resultado, o script pode usar a memória de forma ineficiente. Além disso, ter 
variáveis ​​e funções globais provavelmente causará colisões de nomes

Uma maneira de evitar que as funções e variáveis ​​poluam o objeto global é usar 
expressões de função imediatamente invocadas. */

/* Exemplo de IIFE, executa o codigo imediatamente sem precisar chamar a funcao e
protege o escopo global */
           /*  (function (){
             console.log('testando')
            })() */



/*  Posso trabalhar tranquilamento como se fosse o escopo global dentro do IIFE,
 contendo várias funcoes dentro da mesma */

(function (){
    const sobrenome = 'Isaak'
    function criaNome (nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Pedro'));
    }

    falaNome();
   
})();
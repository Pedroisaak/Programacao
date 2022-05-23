
window.onload=function(){                                             //Precisei colocar esse trem pra funcionar


var form = document.getElementById('formulario');                    //Criando uma variavel no formulario para depois chamarmos o evento de listener

/*                  REALIZANDO COM VARIAVEIS
var form = document.getElementById('formulario');
var nome = document.getElementById('nome');
var sobrenome = document.getElementById('sobrenome');
var peso = document.getElementById('peso');
var altura = document.getElementById('altura');  

form.addEventListener('submit', function(e) {
    
    document.body.innerHTML += `Seu numero é: <strong>${nome.value}</strong><br />`;
    document.body.innerHTML += `Seu sobrenome é: <strong>${sobrenome.value}</strong><br />`;
    document.body.innerHTML += `Seu peso é: <strong>${peso.value}</strong><br />`;
    document.body.innerHTML += `Sua altura é: <strong>${altura.value}</strong><br />`;
    
    // impede o envio do form
    e.preventDefault();
});   
*/  

/*              //REALIZANDO COM ARRAY
const pessoa = [nome, sobrenome, peso, altura];         //Criando a array para alocarmos os valores do formulario
                    
pessoa.nome = document.getElementById('nome');
pessoa.sobrenome = document.getElementById('sobrenome');
pessoa.peso = document.getElementById('peso');
pessoa.altura = document.getElementById('altura');

form.addEventListener('submit', function(e) {
    
    document.body.innerHTML += `Seu numero é: <strong>${pessoa.nome.value}</strong><br />`;
    document.body.innerHTML += `Seu sobrenome é: <strong>${pessoa.sobrenome.value}</strong><br />`;
    document.body.innerHTML += `Seu peso é: <strong>${pessoa.peso.value}</strong><br />`;
    document.body.innerHTML += `Sua altura é: <strong>${pessoa.altura.value}</strong><br />`;
    
    // impede o envio do form
    e.preventDefault();
});   

*/
        //COM OBJETO
const pessoa = {
    nome,
    sobrenome,
    peso,
    altura
}

form.addEventListener('submit', function(e) {
    
    document.body.innerHTML += `Seu numero é: <strong>${pessoa.nome.value}</strong><br />`;  
    document.body.innerHTML += `Seu sobrenome é: <strong>${pessoa.sobrenome.value}</strong><br />`;
    document.body.innerHTML += `Seu peso é: <strong>${pessoa.peso.value}</strong><br />`;
    document.body.innerHTML += `Sua altura é: <strong>${pessoa.altura.value}</strong><br />`;
    
    // impede o envio do form
    e.preventDefault();

});   

}



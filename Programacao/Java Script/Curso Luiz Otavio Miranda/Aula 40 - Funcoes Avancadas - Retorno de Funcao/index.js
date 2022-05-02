/* 
return
Retorna um valor 
Termina a funcao 
*/

/* Aqui estamos realmente retornando um valor somando os parametros a e b */
function soma(a, b) {
    return a + b;
}
console.log(soma(1, 2));


/* Neste caso estamos apenas exibindo um console.log com a soma dos dois parametros */
function soma2(a, b) {
    console.log(a + b);
}
soma2(1, 2);


/* Exemplo de uma funcao que não retorna valor mas sim um evento, nem todas as 
funcoes retornam um valor como por exemplo a funcao ola, apenas exibi um texto  */

function ola() {
    console.log('Olá')
}
ola();

/* Podemos utilizar a funcao para retornar valores de um objeto */
function criaPessoa(nomeDaPessoa, sobrenomeDaPessoa) {
    return {nome : nomeDaPessoa , sobrenome: sobrenomeDaPessoa}
}

const p1 = criaPessoa('Pedro', 'Isaak'); //podendo ser literal
const p2 = {                             //ou de um objeto criado
    nome : 'Pedrinho',
    sobrenome : 'Luchtenberg'
}
console.log(p1)
console.log(p2)

/* Exemplo de funcao dentro de funcao */
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}
const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!'));

/* Este exemplo mostra a aplicabilidade da funcao dentro de funcao, abaixo o 
exemplo com 3 funcoes e em seguida com apenas uma */
function duplica(n) {
    return n * 2
}
function triplica(n) {
    return n * 3
}
function quadriplica(n) {
    return n * 4
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

console.log('###############################');

function criaMultiplador(multiplicador) {
    function multiplicacao(n) {
        return n * multiplicador;
    }
    return multiplicacao;
}

const duplicando = criaMultiplador(2)
const triplicando = criaMultiplador(3)
const quadruplicando = criaMultiplador(4)
console.log(duplicando(2))
console.log(triplicando(2))
console.log(quadruplicando(2))
// par nome/valor
const saudacao = 'opa'  

function exec() 
{
    const saudacao = 'Falaa'
    return saudacao
}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome:'Pedro',
    idade: 31,
    peso: 95,
    endereco: {
        logradouro: 'Rua Francisco Derosso',
        numero: 4385
    }

}

console.log(saudacao)
console.log(exec())
console.log(cliente)
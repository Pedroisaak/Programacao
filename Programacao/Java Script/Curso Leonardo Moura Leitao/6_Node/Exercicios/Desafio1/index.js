
const chinesa = funcionario => funcionario.pais ==='China'
const mulher = funcionario => funcionario.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

const axios = require('axios')
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

axios.get(url).then(Response => {
    const funcionarios = Response.data

    const chinesaMenorSalario = funcionarios.filter(chinesa).filter(mulher).reduce(menorSalario)

    console.log(chinesaMenorSalario)
    
})  




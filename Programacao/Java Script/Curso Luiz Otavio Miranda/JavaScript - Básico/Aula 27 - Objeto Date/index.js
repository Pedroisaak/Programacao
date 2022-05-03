const data = new Date()                         //Criando o Date

console.log('Dia', data.getDate());             //Pega o dia 
console.log('Mês', data.getMonth() +1);         //Pega o Mes, porém janeiro em js é 0, para pegar o mes real colocamos +1
console.log('Ano', data.getFullYear());         //Pega o Ano
console.log('Hora', data.getHours());           //Pega as Horas
console.log('Min', data.getMinutes());          //Pega os Minutos
console.log('Seg', data.getSeconds());          //Pega os Segundos
console.log('Dia da Semana', data.getDay());    //Pega o dia da semana
console.log(data.toString())                    //Pega por completo a data em string
console.log(Date.now())                         //Pega a contagem de milisegundos desde 01/01/70, data unix



function zeroAesquerda(numero){                     //Como o JS retorna um valor abaixo de 10 com apenas o numero inteiro, criamos essa funcao para adicionar um 0 caso o numero for menor que 10
   return numero >= 10 ? numero : `0${numero}`;     //Usamos a operacao ternária para simplificar sem precisar dos ifs
}

const fdata = new Date();       

function formataData(fdata) {                       //Criamos uma funcao para pegar todos os valor do Date e retorna-las em uma template string
    const dia = zeroAesquerda(fdata.getDate());     //Criamos uma constante para adicionar o dia chamado ao mesmo tempo a funcao zeroAesquerda para incluir um zero nos numeros abaixo de 10
    const mes = zeroAesquerda(fdata.getMonth() +1);
    const ano = zeroAesquerda(fdata.getFullYear()); 
    const hora = zeroAesquerda(fdata.getHours());
    const min = zeroAesquerda(fdata.getMinutes());
    const seg = zeroAesquerda(fdata.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const dataBrasil = formataData(fdata);              //criamos uma funcao para armazenar o return da funcao
console.log(dataBrasil)
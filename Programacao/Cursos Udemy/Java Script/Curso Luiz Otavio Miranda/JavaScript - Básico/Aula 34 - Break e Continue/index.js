/*                          CONTINUE
A palavra chave continue termina a atual iteração do laço em que ele se encontra ou de um 
laço rotulado, e continua a execução deste laço com a próxima iteração.

continue [rótulo]; 

                            BREAK
O comando break encerra o loop atual, switch, ou o loop que foi informado no label e transfere o 
controle da execução do programa para o comando seguinte. 

break [label];
*/


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of numeros) {

    if (i === 2){
        console.log('Achei o 2 aqui e pulei')
        continue;                                                   //caso o if seja verdadeiro, usamos o continue para pular o numero 2, o continue não executa o codigo abaixo dele e volta para o laco
    }

    if (i ===7){
        console.log('Usei o Break aqui e não vou ler mais a array') //caso o if seja verdadeiro, usamos o break para parar o laco, não executando mais o laco, é usado para otimizar servidores, visto que executar um laco muito grande mesmo já achando o valor, prejudica o desempenho
        break;
    }
    console.log(i)
}
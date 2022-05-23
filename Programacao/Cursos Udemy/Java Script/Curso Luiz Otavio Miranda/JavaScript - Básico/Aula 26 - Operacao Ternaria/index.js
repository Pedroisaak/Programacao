//Operacao ternária é um metodo para simplificar operacoes

const pontuacao = 100;
const nivelUsuario = pontuacao >= 1000 ? 'Usuario Vip' : 'Usuario Normal' //aqui retornara o primeiro valor verdadeiro

console.log(nivelUsuario)


/* EXEMPLO COM IF PADRAO
const pontuacao = 1000

if (pontuacao >= 1000){
    console.log('Usuario VIP')
} else {
    console.log('Usuario Padrao')
}
*/
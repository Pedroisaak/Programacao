/* O SWITH CASE É POUCO UTILIZADO MAS TEM AS MESMAS CONFIGURACOES DE UM BLOCK IF PORÉM MAIS SIMPLES
E COM MENOS LINHA DE CODIGO */

const data = new Date('1987-04-29 00:00:00');       //Criamos um Data e passamos como parametro uma data qualquer
let diaDaSemana = data.getDay();                    //Criamos uma variavel para armazenar o dia da variavel anterior
let diaTexto;                                       //Variavel que sera usada para armazenar a string do dia no switch
console.log(diaDaSemana);

 switch (diaDaSemana) {                              //Abrimos o switch passando como parametro o diaDaSemana
    case 0:                                         //caso 0: significa que caso o valor do diaDaSemana for verdadeiro, ira processar o bloco
        diaTexto = 'Domingo';
        break;                                      //Necessário sempre colocar break para cada case
    case 1:
        diaTexto = 'Segunda';
    break;
    case 2:
        diaTexto = 'Terca';
    break; 
    case 3:
        diaTexto = 'Quarta';
    break; 
    case 4:
        diaTexto = 'Quinta';
    break; 
    case 5:
        diaTexto = 'Sexta';
    break; 
    case 6:
        diaTexto = 'Sabado';
    break;
    default : ''     
} 
console.log(diaDaSemana);
console.log(diaTexto);




//              EXEMPLO COM FUNCAO
let diaDaSemanaFuncao = data.getDay();
function getDiaSemanaTexto (qualquercoisa) {
    let diaTextoFuncao; 
    switch (qualquercoisa) { 
                                    
        case 0:                                         
        diaTextoFuncao = 'Domingo';
            break;                                      
        case 1:
            diaTextoFuncao = 'Segunda';
        break;
        case 2:
            diaTextoFuncao = 'Terca';
        break; 
        case 3:
            diaTextoFuncao = 'Quarta';
        break; 
        case 4:
            diaTextoFuncao = 'Quinta';
        break; 
        case 5:
            diaTextoFuncao = 'Sexta';
        break; 
        case 6:
            diaTextoFuncao = 'Sabado';
        break;
        default : ''    
    }
        return diaTextoFuncao
}
diaTextoFuncao = getDiaSemanaTexto(diaDaSemanaFuncao)

console.log(diaTextoFuncao);
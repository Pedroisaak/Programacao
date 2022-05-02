/* Outro exemplo onde o professor fez um teste o qual foi criada uma variavel fora de um bloco e outra com o mesmo nome dentro, em outras linguagens, a saidade de
* valores seria diferente, mas a variavel var só respeita dois escopos, global e dentro de uma funcao, entao mesmo estando em escopos diferentes, a atribuicao de valor dentro de um bloco
* interfere fora dele
*  FUJA DO ESCOPO GLOBAL!! recado
*/

var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}

    console.log('fora =', numero)
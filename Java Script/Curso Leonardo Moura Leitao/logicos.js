/*
*   usando operadores logicos, 'e' com &&
*   'ou' com ||
*   'esclusivamente 'ou' com !=     este no exemplo abaixo significa que caso um dois trabalho ele consiga terminar comprara a tv de 32 ao invez da de 50
*/

function compras (trabalho1, trabalho2) 
{
    const comprarSorvete = trabalho1 || trabalho2       //usando operador ou
    const comprarTv50 = trabalho1 && trabalho2          //usando o operador e
    const comprarTv32 = trabalho1 != trabalho2          //usando exclusivamente ou com !=
    const manterSaudavel = !comprarSorvete
        return {                                        // para retornar varios valores, criamos um retun com objeto
            comprarSorvete: comprarSorvete,
            comprarTv50: comprarTv50,
            comprarTv32: comprarTv32,
            manterSaudavel: manterSaudavel
        }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
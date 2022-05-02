/* neste exemplo o professor criou varios blocos e deu o exeplo de escopo, em outras linguas a variavel será só seria visivel no escopo (bloco) 
* em que a variavel foi declara, mas em JS, var tembem pode ser evocada fora do escopo, muito perigoso, pois em outros projetos, deixar uma variavel global pode causar
* problemas de outra pessoa sobescreber o valor da variavel
*/

{
    {
        {
            {
                var sera = 'Será???'        
                console.log(sera)
            }
        }
    }
}

console.log(sera)                           //declarada em um bloco isolado, a variavel também pode ser acessada fora

function teste() {                          //para fugir do escopo global, podemos utilizar a variavel em uma funcao, já que deste jeito a variavel não fica visivel fora do escopo
    var local = 123
    console.log(local)
}

teste()
console.log(local)                          //tentando evocar a variavel local fora do escopo da funcao teste, ocorrerá um erro
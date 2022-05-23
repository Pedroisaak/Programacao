/*                             TRY CATCH
As declarações try...catch marcam um bloco de declarações para testar (try),  
e especifica uma resposta, caso uma exceção seja lançada.

try {
   try_statements
}
[catch (exception_var_1 if condition_1) {
   catch_statements_1
}]
...
[catch (exception_var_2) {
   catch_statements_2
}]
[finally {
   finally_statements
}]




                                THROW
A declaração throw lança uma exceção definida pelo usuário. A execução da função 
atual vai parar (as instruções após o throw não serão executadas), e o controle 
será passado para o primeiro bloco catch na pilha de chamadas. 
Se nenhum bloco catch existe entre as funções "chamadoras", o programa vai terminar.
*/



function soma(num1, num2) {

    if (typeof num1 !== 'number' || typeof num2 !== 'number' ) {
        throw ('Digite numeros')                             //Caso seja verdadeiro o if, seja mostradado a expressao throw
    } else {
    return num1 + num2
}    
}

try {                                     //tentara executar o codigo
console.log(soma('asdf',2))
} catch(erro) {                           //caso tenha algum erro em try, catch será executado
    console.log('parametros errados')
    console.log(erro)

}
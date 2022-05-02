const funcs = []

for (let i = 0; i < 10; i++)            //diferente de var, usando let em uma funcao de laco, o retorno dos indices será aquele resultado o qual o laco for processou
{
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
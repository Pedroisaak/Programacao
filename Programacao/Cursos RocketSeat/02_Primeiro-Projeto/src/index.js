const express = require("express");
const {v4: uuidv4} = require("uuid")

const app = express();

app.use(express.json()); //necessário indicar que o express podera usar o formato json

const customers = [];


//Middleware que verifica se a conta já tem cpf criado
function verfyIfExistsAccountCPF(request, response, next) {
    const {cpf} = request.headers;
    const customer = customers.find((customer) => customer.cpf === cpf)

    if(!customer) {
        return response.status(400).json({ error: "Customer not found"})
    }

    request.customer = customer;

    return next();
}

//Função para extrair o balanço dos usuário utilizando o método reduce para percorrer o array statements
function getBalance(statement) {
    const balance = statement.reduce((acc, operation) => {
        if(operation.type === 'credit') {
            return acc + operation.amount;
        }else{
            return acc - operation.amount;
        }
    }, 0)
    return balance;
}

//Rota para Criação da conta
app.post("/account", (request, response) => {
    const {cpf, name} = request.body;

    //utiliza a função some que percorre o array de customers e verifica se o cpf já esta cadastrado
    const customersAlreadyExists = customers.some((customers) =>customers.cpf === cpf)

    //caso encontre, retornará o status 400 com a mensagem de erro
    if (customersAlreadyExists) {
        return response.status(400).json({ error: "Customer already exists!"})
    }
    //caso seja um cpf novo, dará um push no array
    customers.push ({
        cpf,
        name,
        id: uuidv4(), //usamos o uuid v4 para gerar um id aleatório para o usuário
        statement: []
    });

    console.log(customers)
    return response.status(201).send();

})

/* app.use(verfyIfExistsAccountCPF);  metodo de invocar um middleware em todas as rotas*/

//Rota para o extato
app.get("/statement", verfyIfExistsAccountCPF, (request, response) => {
    const {customer} = request;

    return response.json(customer.statement)
})

//Rota para o depósito
app.post("/deposit", verfyIfExistsAccountCPF, (request, response) => {
    const {description, amount} = request.body

    const {customer} = request;

    const statementOperation = {
        description,
        amount,
        created_at: new Date(),
        type: "credit"
    }

    customer.statement.push(statementOperation);
    return response.status(201).send();
})

//Rota para o saque
app.post("/withdraw", verfyIfExistsAccountCPF, (request, response) => {
    const { amount } = request.body;
    const { customer } = request;

    const balance = getBalance(customer.statement);

    if(balance < amount){
        return response.status(400).json({error: "Insufficient funds!"})
    }

    const statementOperation = {
        amount,
        created_at: new Date(),
        type: "debit",
    };

    customer.statement.push(statementOperation);

    return response.status(201).send();
});

//Rota para o extrato com data especificada
app.get("/statement/date", verfyIfExistsAccountCPF, (request, response) => {
    const {customer} = request;
    const { date } = request.query;

    const dateFormat = new Date(date + " 00:00");

    const statement = customer.statement.filter((statement) => 
    statement.created_at.toDateString() === new Date(dateFormat).toDateString()
    
    );

    return response.json(statement);

    
})

//Rota para atualização de cadastro
app.put('/account', verfyIfExistsAccountCPF, (request, response) => {
    const {name} = request.body;
    const {customer} = request;

    customer.name = name;

    return response.status(201).send();
})

//Rota para detalhes da conta
app.get("/account", verfyIfExistsAccountCPF, (request, response) => {
    const {customer} = request

    return response.json(customer);

})

//Rota para deletar a conta
app.delete("/account", verfyIfExistsAccountCPF, (request, response) => {
    const {customer} = request;

    //splice
    customers.splice(customer, 1);

    return response.status(200).json(customers);

});

//Rota para o balanço da Conta
app.get("/balance", verfyIfExistsAccountCPF, (request, response) => {
    const {customer} = request
    const balance = getBalance(customer.statement)

    return response.json(balance)
})



app.listen(3333);
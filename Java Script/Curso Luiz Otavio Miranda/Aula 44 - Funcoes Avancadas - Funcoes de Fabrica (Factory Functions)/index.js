function criaPessoa(nomeDaPessoa, sobrenomeDaPessoa, pesoDaPessoa, alturaDaPessoa) {
    return {
        nome: nomeDaPessoa,
        sobrenome: sobrenomeDaPessoa,
        peso: pesoDaPessoa,
        altura: alturaDaPessoa,
        teste: 'TESTE',
        //toda funcao dentro de funcao de chama metodo e declaramos com 2 pontos
        fala(assunto) {
            return `${this.nome} esta falando ${assunto}.`;
        },
        //Funcao simples para calcular o imc
        imc() {
            const indice = this.peso / (this.altura * this.altura)
            return indice.toFixed(2)
        },
        //this sempre se refere a variavel a quem chamou o metodo, no caso 'p1'
        testandoThis() {
            return `Com o this, consegui resgatar a variavel fora do escopo da funcao. Sem o this ${this.teste} fica 'not defined'`
        },

        /*Aqui, transformamos a funcao imc acima como uma atributo usando get, 
        ou seja, a funcao esta 'fingindo' ser um atributo, quando uma funcao só obtem 
        um valor, podemos transforma-lo em um atributo */
        get imcComoAtributo() {
            const indice =  this.peso / (this.altura * this.altura)
            return indice.toFixed(2)
        },
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        /* set serve para pegar um determinado valor e encapsular/proteger/isolar propriedades e facilitar o trabalho com objetos.*/ 
        set alterarNome(alterarNome) { 
            this.nome = alterarNome
        },

        set alterarSobrenome(alterarSobrenome) { 
            this.sobrenome = alterarSobrenome
        }
    }
}

const p1 = criaPessoa('Pedro', 'Isaak', 90, 1.9)
const p2 = criaPessoa('Marlene', 'luchtenberg', 90, 1.9)

/* Com o set definido apontando pelo nome, posso alterar o nome e sobrenome isoladamente,
facilitando o trabalho com objetos e ao mesmo tempo, claro que podemos usar p1.nome para alterar
mas assim o codigo poderia ficar ambiguo e poluí o escopo global */
p1.alterarNome = 'Maria' 
p1.alterarSobrenome = 'Joana' 

p2.alterarNome = 'Paulo' 
p2.alterarSobrenome = 'Coelho' 
console.log(p1.fala('JS'));
console.log(p1.testandoThis());
console.log(p1.imc());
//chamando o imc como atributo com o get
console.log(p1.imcComoAtributo);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p2.nome);
console.log(p2.sobrenome);
console.log(p1.nomeCompleto);
console.log(p2.nomeCompleto); 






//setando constantes para armazenas os elementos HTML
const inputTarefa = document.querySelector('.inputTarefa')
const botao = document.querySelector('.submitTarefa');
const listaTarefas = document.querySelector('.listaTarefas')

//funcao que pega o valor do input
function inputValue() {
    const inputValor = inputTarefa.value;
    return inputValor
}

//funcao que cria uma li nova
function criaLi() {
    const liNova = document.createElement("li"); 
    listaTarefas.appendChild(liNova); 
    return liNova
}

//Cria um botao deletar dentro da li recem criada
function criarBotaoDeletar(li) {
    const botaoDeletar = document.createElement('button');
    botaoDeletar.className ='Delete'
    li.appendChild(botaoDeletar)
    botaoDeletar.innerText = 'Deletar'
}

//Cria a tarefa, junta tudo aqui
function criarTarefa() {
    const li = criaLi();
    li.innerText = inputValue();
    criarBotaoDeletar(li);
    salvarTarefas()  
}

//Deleta a tarefa
function deletarTarefa(e) {
    if (e.classList.contains('Delete')) {
        e.parentElement.remove();
    }
    salvarTarefas()
}

//Evento que pega o elemento onde clicar, assim filtramos a heranca do elemento e excluimos a li 
//pelo botao deletar que é filho dela
document.addEventListener('click', function(e) {
    const el = e.target;
    deletarTarefa(el);   
});

botao.addEventListener('click', function(event){
    criarTarefa();
}); 



function salvarTarefas() {
    const liTarefas = listaTarefas.querySelectorAll('li');
    const listaDeTarefas = [];
  
    for (let tarefa of liTarefas) {
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('Deletar', '').trim();
      listaDeTarefas.push(tarefaTexto);
      console.log(listaDeTarefas)
    }
  
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
  }

  
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
  
    for(let tarefa of listaDeTarefas) {
      criarTarefa(tarefa);
    }
  }
  adicionaTarefasSalvas();
  
  
 













/* 
var botao = document.querySelector('.submitTarefa');
var listaTarefas = document.querySelector('.listaTarefas')

function criaLi() {
}

botao.addEventListener('click', function (event) {
    const inputTarefa = document.querySelector('.inputTarefa');
    const inputValor = inputTarefa.value;
    console.log(inputValor)

    const selecionarUl = document.querySelector('.listaTarefas');
    const liNova = document.createElement("li");   
    const liNovaNode = document.createTextNode(inputValor)
    const deletarLi = document.createElement("button")
    deletarLi.className ='Delete'
    const deletarNode = document.createTextNode('Deletar')
    selecionarUl.appendChild(liNova)
    liNova.appendChild(liNovaNode)
    liNova.appendChild(deletarLi)
    deletarLi.appendChild(deletarNode)

});

document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains('Delete')) {
        el.parentElement.remove();
    }
});
 
 */
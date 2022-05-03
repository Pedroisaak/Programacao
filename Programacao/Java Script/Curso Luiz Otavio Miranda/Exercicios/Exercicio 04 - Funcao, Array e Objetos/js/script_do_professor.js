function meuEscopo () {                                           //Ele criou dizendo que é uma boa pratica pois se instala uma biblioteca nova pode dar conflitos de escopo
  const form = document.querySelector('.form');                   //Selecionamos a tag form com a classe 'form' em uma variavel 
  const resultado = document.querySelector('.resultado');         //Selecionamos a div em uma variavel 

  const pessoas = [];                                             //Criamos a array para alojar os dados

  function recebeEventoForm (evento) {
    evento.preventDefault();                                      //Tivemos que criar esse evento para previnir que a pagina se atualizasse

    const nome = form.querySelector('.nome');                     //Estamos selecionando o input com a classe 'nome' e atribuindo a uma variavel
    const sobrenome = form.querySelector('.sobrenome');           //Estamos selecionando o input com a classe 'sobrenome' e atribuindo a uma variavel
    const peso = form.querySelector('.peso');                     //Estamos selecionando o input com a classe 'peso' e atribuindo a uma variavel
    const altura = form.querySelector('.altura');                 //Estamos selecionando o input com a classe 'altura' e atribuindo a uma variavel

    pessoas.push({                                                //Usando push, estamos criando outro objeto dentro da array
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });

    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` +     //Printamos na div resultado os valores da form
      `${peso.value} ${altura.value}</p>`;
  }

  form.addEventListener('submit', recebeEventoForm);                    //Um evento na qual quando clicarmos no submit ele executara o evento 'recebeEventoForm'
}
meuEscopo();

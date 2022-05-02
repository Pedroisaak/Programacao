/* 
A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos 
e respostas. Ela também fornece o método global fetch() (en-US) que fornece uma maneira fácil e lógica para 
buscar recursos de forma assíncrona através da rede.

Este tipo de funcionalidade era obtida anteriormente utilizando XMLHttpRequest(ajax). Fetch fornece uma alternativa melhor 
que pode ser facilmente utilizada por outras tecnologias como Service Workers (en-US). Fetch também provê um lugar 
lógico único para definir outros conceitos relacionados ao protocolo HTTP como CORS e extensões ao HTTP.
*/

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribute('href');
    const response = await fetch(href); //usando o fetch para valida o href

    if(response.status !== 200) throw new Error('ERRO 404!');//se fetch não passar jogamos um erro

    const html = await response.text();//criamos uma constante para armazenas o texto contido na div
    carregaResultado(html);//caso o fetch passe sem nenhum erro, executara isto
  } catch(e) {
    console.log(e);
  }
}

//funcao para inserir na div o resultado de fetch
function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}











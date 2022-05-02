/* 
AJAX é o acrônimo para JavaScript assíncrono + XML. Não é exatamente uma tecnologia nova, mas um termo empregado em 2005
por Jesse James Garrett para descrever uma nova forma de utilizar em conjunto algumas tecnologias, incluindo HTML ou XHTML, 
CSS, JavaScript, DOMl, XML, XSLT, e o mais importante: objeto XMLHttpRequest.

Quando essas tecnologias são combinadas no modelo AJAX, as aplicações web que a utilizam são capazes de fazer 
rapidamente atualizações incrementais para a interface do usuário sem recarregar a página inteira do navegador. 
Isso torna a aplicação mais rápida e sensível às ações do usuário.


*/

const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
      if(xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute('href');

  const objConfig = {
    method: 'GET',
    url: href
  };

  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch(e) {
    console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}

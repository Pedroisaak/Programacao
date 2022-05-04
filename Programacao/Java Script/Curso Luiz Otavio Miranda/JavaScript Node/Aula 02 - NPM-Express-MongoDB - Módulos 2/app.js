/* 
                                        Importando nosso código
 Como o back-end é escrito em node.js, podemos fazer uso de uma função chamada require que vai ser responsável por 
 chamar o nosso módulo moduloDeImpressao.js para dentro do nosso app.js. É essa função que vai ler e interpretar 
 nosso módulo. Assim podemos reutilizar o nosso código sem precisar reescrever a nossa classe.   

ex: const impressao = require('./moduloDeImpressao');

                                        Exportando nosso código
O require é responsável por interpretar e retornar o conteúdo do código para que possamos utilizar na aplicação 
principal, porém o que está acontecendo é que ele não está encontrado nada exportável dentro do arquivo, ou seja, 
nada está publico. Para que o nosso código funcione na aplicação principal além de importar temos que lembrar de 
exportar também, ou seja, deixar o nosso código visível para a aplicação principal. 
Para fazermos isso utilizamos o module.export

ex: module.exports = ModuloDeImpressao; 

                                        Exportando nosso código(somente com exports)
]
O sistema de módulos do Node.js é responsável por criar o objeto module.export e o export aponta para esse objeto, 
podendo ser usado para retornar funções e objetos bastando somente adicioná-los ao export.                                        
 */


//usando o require para importar a classe do arquivo mod2.js
const Cachorro = require('./z/mod2');

const c1 = new Cachorro('Dog');
c1.latir();

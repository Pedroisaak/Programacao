const elementos = [                                            //Criado uma array com objetos
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'Section', texto: 'Frase 4' }
]


/* console.log(elementos[0])

console.log(elementos[0]) */

function criaElemento() {
    for (i = 0; i = elementos.length; i++) {                //Laco for que pega a altura do indice como parametro

        let [{ tag: tagExtraido, texto: textoExtraido }] = elementos    //extraio a tag e o texto de cada objeto e atribuo para uma variavel

        const elemento = document.createElement(tagExtraido);           //Crio o elemento e no parametro insiro a variavel 'tagExtraido' referente a tag a ser criada
        const node = document.createTextNode(textoExtraido);            //Insiro um conteudo na tag recem criada com o paramentro da variavel textoExtraido retirada anteriormente
        elemento.appendChild(node);                                     //Sintaxe para criar o elemento como filho da tag pai                                     

        const container = document.querySelector('.container')
        container.appendChild(elemento);
        elementos.shift()                                               //Exclui a primeira lista de objetos assim que a mesma já foi criada no html
    }
}


criaElemento();











/*   for(i = 0; i < elementos.length; i++) {
     
    let [{tag : tagExtraido, texto : textoExtraido}] = elementos 
    
    const elemento = document.createElement("p")
    const texto = document.createTextNode('Novo Paragrafo');
    elemento.appendChild(texto);
    
    const container = document.querySelector('.container')
    container.appendChild(elemento);  
    
}  */




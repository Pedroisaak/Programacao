const visor = document.querySelector('.visor');
const formulario = document.querySelector('.formulario');




    document.addEventListener('click', function(e){
    const el = e.target
    const inputValor = el.value
    visor.value += inputValor
    return inputValor
    });

function matematica (el) {
    if(el == '='){
        visor.value = visor.value.slice(0, -1);
        visor.value = eval(visor.value)
        }

}

(function inicia () {
    matematica(selecionaElemento())
})();


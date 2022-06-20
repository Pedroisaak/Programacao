function calcular() {
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    
    if(!altura || !peso){
        document.getElementById('imc').innerHTML = `Preencha os campos`
        return
    }
    

    let imc = peso / (altura ** 2)
    imc = imc * 10000
    imc = imc.toFixed(2)
    document.getElementById('imc').innerHTML = `O imc é ${imc}`
}

function limpar(){
    const altura = document.getElementById('altura').value = ''
    const peso = document.getElementById('peso').value = ''
    document.getElementById('imc').innerHTML = ''
}
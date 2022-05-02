

  const formulario = document.querySelector('.formulario');  //selecionei com o querySelector a tag formulario e atribui a variavel formulario para ficar mais facil de trabalhar com ela
  const descricao = document.querySelector('.descricao');    // o mesmo de cima, o proposito deste é gerar uma tag com o resultado



  function recebeEventoForm(evento) {                         //criamos um evento para a pagina não atualizar quando clicarmos no botao submit
    evento.preventDefault();

    var peso = formulario.querySelector('.peso');             //variavel peso recebera o valor no input peso
    var altura = formulario.querySelector('.altura');         //variavel altura recebera o valor no input altura
    peso = parseFloat(peso.value);                            //como o input sempre retorna uma string e pretendemos fazer calculos, devemos transformar a string em numeros
    altura = parseFloat(altura.value);

    if (!isNaN(peso) && !isNaN(altura)) {              //tratamento para quando o usuario digitar algo que não seja numero, avisa-lo

      const imc = peso / (altura * altura)                    //calculo do imc
      const resultado = imc.toFixed(2);                       //geramos a variavel resultado que deixara o calculo do imc com duas casas decimais


      if (resultado < 18.5) {                                 //Inicio dos ifs para tratar o calculo e devolver a mensagem conforme o imc
        descricao.style.backgroundColor = '#73CAEE';
        descricao.style.fontSize = "20px";
        descricao.innerHTML = `<p><strong>PESO: </strong>${peso} <br>    <strong>ALTURA:</strong> ${altura}  <br>    <strong>IMC:</strong> ${resultado}</p>`;
        descricao.innerHTML += `<p>Voce esta com ${resultado} de imc e esta <strong>ABAIXO DO PESO</strong></p>`;

      }
      else if (resultado >= 18.50 && resultado <= 24.99) {
        descricao.style.backgroundColor = '#2DEAAE';
        descricao.style.fontSize = "20px";
        descricao.innerHTML = `<p><strong>PESO: </strong>${peso} <br>    <strong>ALTURA:</strong> ${altura}  <br>    <strong>IMC:</strong> ${resultado}</p>`;
        descricao.innerHTML += `<p>Voce esta com ${resultado} de imc e esta com o <strong>PESO NORMAL</strong></p>`;
      }

      else if (resultado >= 25 && resultado <= 29.9) {
        descricao.style.backgroundColor = '#DAE535';
        descricao.style.fontSize = "20px";
        descricao.innerHTML = `<p><strong>PESO: </strong>${peso} <br>    <strong>ALTURA:</strong> ${altura}  <br>    <strong>IMC:</strong> ${resultado}</p>`;
        descricao.innerHTML += `<p>Voce esta com ${resultado} de imc e esta com <strong>SOBREPESO</strong></p>`;
      }
      else if (resultado >= 30 && resultado <= 34.9) {
        descricao.style.backgroundColor = '#E5BD35';
        descricao.style.fontSize = "20px";
        descricao.innerHTML = `<p><strong>PESO: </strong>${peso} <br>    <strong>ALTURA:</strong> ${altura}  <br>    <strong>IMC:</strong> ${resultado}</p>`;
        descricao.innerHTML += `<p>Voce esta com ${resultado} de imc e esta com <strong>OBESIDADE 1</strong></p>`;
      }

      else if (resultado >= 35 && resultado <= 39.9) {
        descricao.style.backgroundColor = '#E5A835';
        descricao.style.fontSize = "20px";
        descricao.innerHTML = `<p><strong>PESO: </strong>${peso} <br>    <strong>ALTURA:</strong> ${altura}  <br>    <strong>IMC:</strong> ${resultado}</p>`;
        descricao.innerHTML += `<p>Voce esta com ${resultado} de imc e esta com <strong>OBESIDADE 2</strong></p>`;
      }
      else if (resultado >= 40 && resultado <= 50) {
        descricao.style.backgroundColor = '#E57835';
        descricao.style.fontSize = "20px";
        descricao.innerHTML = `<p><strong>PESO: </strong>${peso} <br>    <strong>ALTURA:</strong> ${altura}  <br>    <strong>IMC:</strong> ${resultado}</p>`;
        descricao.innerHTML += `<p>Voce esta com ${resultado} de imc e esta com <strong>OBESIDADE 3</strong></p>`;
      }
      else {
        descricao.style.backgroundColor = '#E53535';
        descricao.style.fontSize = "20px";
        descricao.innerHTML = `<p><strong>PESO: </strong>${peso} <br>    <strong>ALTURA:</strong> ${altura}  <br>    <strong>IMC:</strong> ${resultado}</p>`;
        descricao.innerHTML += `<p>Voce esta com ${resultado} de imc e esta <strong>GORDO DEMAIS</strong></p>`;
      }

    }
    else {
      alert(`digite um valor valido`)             //caso o usuario digitar algo alem do numero, aparecera uma tela avisando-o
    }

  }

  formulario.addEventListener('submit', recebeEventoForm);  //ativa a funcao quando clicarmos no botao, essa funcao não atualiza a pagina como vem de padrao nos navegadores









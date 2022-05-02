// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/
function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function() {
      return cpfEnviado.replace(/\D+/g, '');
    }
  });
}

ValidaCPF.prototype.valida = function() {
  if(typeof this.cpfLimpo === 'undefined') return false; //verifica se o campo foi preenchido
  if(this.cpfLimpo.length !== 11) return false;          //veririca se o cpf tem mais de 11 digitos
  if(this.isSequencia()) return false;                   //verifica se o cpf tem sequencia repetida '111.111.111-11

  const cpfParcial = this.cpfLimpo.slice(0, -2);        //tira os dois ultimos digitos do cpf
  const digito1 = this.criaDigito(cpfParcial);          //verifica o primeiro digito e reinclui no cpf
  const digito2 = this.criaDigito(cpfParcial + digito1); //verifica o segundo digito e reinclui no cpf

  const novoCpf = cpfParcial + digito1 + digito2;
  return novoCpf === this.cpfLimpo;                    //verifica após a verificacao e inclisao dos digitos se o cpf inicial bate com os calculos do novo cpf
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) { //cria uma funcao para criar os digitos verificadores e da acesso ao prototype de ValidaCPF 
  const cpfArray = Array.from(cpfParcial);              // cria uma array com o parametro cpfParcial

  let regressivo = cpfArray.length + 1;                 //cria uma variavel regressiva para multiplicar os numeros
  const total = cpfArray.reduce((ac, val) => {          //cria um reduce dentro de uma funcao, isto é para usar um contador regressivo
    ac += (regressivo * Number(val));
    regressivo--;
    return ac;
  }, 0);

  const digito = 11 - (total % 11);
  return digito > 9 ? '0' : String(digito);             //operacao ternária para verificar se o digito for maior que 9
};

ValidaCPF.prototype.isSequencia = function() {          //cria uma funcao onde se verifica se o usuario repetiu varias vezes um numero no cpf
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('070.987.720-03');

if(cpf.valida()) {
  console.log('Cpf válido');
} else {
  console.log('Cpf inválido');
}

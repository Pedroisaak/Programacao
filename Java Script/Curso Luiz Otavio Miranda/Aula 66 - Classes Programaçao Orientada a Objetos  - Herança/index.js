class DispositoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if(this.ligado) {
      console.log(this.nome + ' já ligado');
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if(!this.ligado) {
      console.log(this.nome + ' já desligado');
      return;
    }

    this.ligado = false;
  }
}
/* 
Já temos a classe DispositoEletronico, queremos agora especificar a classe com Smartphone, para Smartphone herdar os
atributos de DispositoEletronico usamos o 'extends', assim, já teremos acesso aos atributos e metodos da clase pai */
class Smartphone extends DispositoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);    //caso tenha algum atributo igual e queira chamar da classe pai, usamos a sintaxe do lado

    this.cor = cor;
    this.modelo = modelo;
  }
}

//criamos outra herança de DispositoEletronico, porém, nada se herda da classe Smartphone, já que são irmãos
class Tablet extends DispositoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }

  ligar() {     //como no constructor function, caso tenha um metodo do mesmo nome no filho, tablet sempre usará o seu metodo, caso não tenha, procurará no prototype e depois na classe pai
    console.log('Olha, você alterou o método ligar.');
  }

  falaOi() {
    console.log('Oi');
  }

}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);

const t1 = new Tablet('iPad', true)
console.log(t1);


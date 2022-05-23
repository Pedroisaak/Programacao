/* A palavra chave static define um método estático para a classe. Métodos estáticos não são chamados na instâncias
 da classe. Em vez disso, eles são chamados na própria classe. Geralmente, são funções utilitárias, como funções 
 para criar ou clonar objetos. 
 
 
 Ou seja, as instancias criadas pela classe não tem acesso a ela ou seus dados de constructor, apenas a propria classe
 pode executa-las
 */

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Método de instância
  aumentarVolume() {
    this.volume += 2;
  }
  diminuirVolume() {
    this.volume -= 2;
  }

  // Método estático, aqui somente a classe ControleRemoto tem acesso, as instancias criadas por ela não
  static soma(x, y) {
    console.log(this);
  }
}

const controle1 = new ControleRemoto('LG');
ControleRemoto.soma();

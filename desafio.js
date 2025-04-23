class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo.toLowerCase() // Para facilitar as comparações
  }

  atacar() {
    let ataque

    // Estrutura de decisão para determinar o tipo de ataque
    if (this.tipo === 'mago') {
      ataque = 'usou magia'
    } else if (this.tipo === 'guerreiro') {
      ataque = 'usou espada'
    } else if (this.tipo === 'monge') {
      ataque = 'usou artes marciais'
    } else if (this.tipo === 'ninja') {
      ataque = 'usou shuriken'
    } else {
      ataque = 'realizou um ataque'
    }

    // Exibindo a mensagem de ataque
    console.log(`o ${this.tipo} atacou ${ataque}`)
  }
}

// Criando uma lista de heróis
const herois = [
  new Heroi('Arthas', 30, 'guerreiro'),
  new Heroi('Merlin', 150, 'mago'),
  new Heroi('Hiro', 25, 'ninja'),
  new Heroi('Lian', 28, 'monge'),
]

// Laço de repetição para fazer cada herói atacar
for (let i = 0; i < herois.length; i++) {
  herois[i].atacar()
}

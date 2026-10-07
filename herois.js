// Desafio DIO: Escrevendo as classes de um Jogo

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "um ataque desconhecido";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando os heróis (objetos da classe)
const herois = [
  new Heroi("Merlin", 120, "mago"),
  new Heroi("Arthur", 30, "guerreiro"),
  new Heroi("Shifu", 60, "monge"),
  new Heroi("Hanzo", 28, "ninja"),
];

// Laço de repetição: cada herói ataca
for (let i = 0; i < herois.length; i++) {
  herois[i].atacar();
}

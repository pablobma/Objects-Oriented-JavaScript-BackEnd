// Orientação a Objetos

// A classe define os atributos (características) e métodos (comportamentos) de um objeto
class pessoa {
    constructor(nome, sobrenome, cpf, email) {
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.cpf = cpf,
        this.email = email
    }

    exibirNomeCompleto() {
        console.log(`${this.nome} ${this.sobrenome}`);
    }
}

// Aplicando conceitos de herança
class programador extends pessoa {
    constructor(nome, sobrenome, cpf, email, linguagem) {
        super(nome, sobrenome, cpf, email),
        this.linguagem = linguagem
    }
}

// Um objeto é uma instância de uma classe
const novoDev = new programador('Pablo', 'Menezes', '0233532534', 'pablo@email', 'Javascript');

// A orientação a objetos é um modelo/estilo de se programar; busca codificar situações do mundo real


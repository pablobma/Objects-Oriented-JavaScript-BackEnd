class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome,
        this.email = email,
        this.cpf = cpf,
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo);
    }
}

const pablo = new Cliente('Pablo', 'pablo@email.com', '02372205284', 100);

console.log(pablo);

pablo.exibirSaldo();
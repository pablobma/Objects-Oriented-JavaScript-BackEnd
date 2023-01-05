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

class ClientePoupança extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoup) {
        super(nome, email, cpf, saldo),
        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor) {
        this.saldoPoup += valor;
    }
} // Comando 'extends' engloba todos os atributos de "Cliente", como as funções (exibirSaldo e depositar)

const logan = new ClientePoupança('Logan', 'logan@caomail', '23423435435', 200, 300);

console.log(logan);

logan.depositar(50);
logan.depositarPoup(50);

console.log(logan);

const cliente = {
    nome: "Pablo",
    cpf: "02372295284",
    idade: 21,
    sexo: "Masculino",
    fones: ['123456789', '987654321'],
    dependentes: [{
        nome: "Elena",
        parentesco: "Irmã",
        dataNasc: "01/06/2010"
    },
    {
        nome: "Logan",
        parentesco: "Irmão",
        dataNasc: "01/01/2020"
    }],
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor;
    }
}

let relatorio = "";

for(let keys in cliente) {
    if (keys.includes("dependentes")) {
        relatorio += `Oferta de seguro para ${cliente.nome}`;
    }
}

console.log(relatorio);


// Outra maneira
const teste = Object.keys(cliente); 
const teste2 = Object.values(cliente);

console.log(teste);
console.log(teste2);

function oferecerSeguro(obj) {
    const objetoCliente = Object.keys(obj);
    if(objetoCliente.includes("dependentes")) {
        console.log(`Oferta de seguro para ${obj.nome}`)
    }
}

oferecerSeguro(cliente);
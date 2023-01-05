// For...in
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

for (let info in cliente) {
    relatorio += info;
}

console.log(relatorio);


let relatorio2 = "";

for(let info2 in cliente) {
    relatorio2 += cliente[info2];
}

console.log(relatorio2);


// Exibindo informações básicas da meneira correta:
let relatorio3 = "";

for(let info3 in cliente) {
    if (typeof cliente[info3] === "object" || typeof cliente[info3] === "function") {
        continue;
    } else {
        relatorio3 += `
        ${info3} - ${cliente[info3]}
        `;
    }
}

console.log(relatorio3);

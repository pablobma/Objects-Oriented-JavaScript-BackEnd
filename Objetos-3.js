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
    }]
}

cliente.dependentes.push({
    nome: "Logan",
    parentesco: "Irmão",
    dataNasc: "01/01/2020"
})

console.log(cliente);

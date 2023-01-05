const cliente = {
    nome: "Pablo",
    cpf: "02372295284",
    idade: 21,
    sexo: "Masculino",
    fones: ['123456789', '987654321']
}

cliente.fones.map(fone => {
    console.log(fone);
})

cliente.dependente = {
    nome: "Elena",
    parentesco: "Irmã",
    dataNasc: "01/06/2010"
}

console.log(cliente);

cliente.dependente.nome = "Elena Menezes";

console.log(cliente);

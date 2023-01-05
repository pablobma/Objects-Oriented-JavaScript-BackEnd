const cliente = {
    nome: "Pablo",
    cpf: "02372295284",
    idade: 21,
    sexo: "Masculino"
}

console.log(cliente.nome);

console.log(cliente.cpf.substring(0,3)); // Três primeiros strings do CPF


const chaves = ['nome', 'cpf', 'idade', 'sexo'];

console.log(cliente[chaves[0]]);

chaves.map(function(indice) {
    console.log(cliente[indice]);
}) // Printa na tela todas as informações do objeto "cliente"


// Adicionando campos em "cliente"
cliente.telefone = "999510046"
console.log(cliente);


// Deletando 
delete cliente.idade;
console.log(cliente);
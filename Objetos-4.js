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

console.log(cliente.saldo);

cliente.depositar(30);

console.log(cliente.saldo);


// Objeto literal e referência
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
   const objPersonagem2 = Object.create(objPersonagem)
   objPersonagem2.nome = "Gandalf, o Cinzento"
   
   console.log(objPersonagem.nome) //Gandalf
   console.log(objPersonagem2.nome) //Gandalf, o Cinzento

   
   /* const objPersonagem2 = objPersonagem
    objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) // Gandalf, o Cinzento
console.log(objPersonagem2.nome) // Gandalf, o Cinzento  */

/* O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro.
Dessa forma, objPersonagem2 é uma instância diferente de objPersonagem e pode ser trabalhada de forma
independente. */

// Teste
let teste = {
    nome: 'Pablo',
    idade: '20'
}

let teste2 = teste;

teste2.nome = "Pablo Menezes";

console.log(teste.nome);
console.log(teste2.nome);
// Dessa forma, os dois objetos funcionam na mesma instância, sendo dependentes.

let teste3 = Object.create(teste);

teste3.nome = 'Pablo Menezes';

console.log(teste.nome);
console.log(teste3.nome);
// Assim, os objetos são independentes!
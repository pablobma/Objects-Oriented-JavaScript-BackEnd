// Sintaxe de espalhamento
const clientes = [
    {
    nome: "Pablo",
    cpf: "02372295284",
    idade: 21,
    sexo: "Masculino",
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
    },
    {
    nome: 'Priscila',
    cpf: 2324245435,
    idade: 40,
    sexo: 'Feminino',
        dependentes: [{
        nome: 'Loguinha',
        parentesco: 'Filho',
        dataNasc: "04/05/2002"
        }]
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.log(listaDependentes);

console.table(listaDependentes);

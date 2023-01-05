// Modo de OO SEM usar classes!

// Herança com protótipos
function cliente(nome, cpf, email, saldo) {
    this.nome = nome,
    this.cpf = cpf,
    this.email = email,
    this.saldo = saldo,
    this.depositar = function(valor) {
        this.saldo += valor;
    }
}

const Pablo = new cliente('Pablo', '02372295284', 'pablo@email', '2000');

console.log(Pablo);


function clientePoupança(nome, cpf, email, saldo, saldoPoup) {
    cliente.call(this, nome, cpf, email, saldo),
    this.saldoPoup = saldoPoup
    this.depositarPoup = function(valor) {
        this.saldoPoup += valor;
    }
}
/*
Outra maneira de usar o depositarPoup:
clientePoupança.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor;
}
*/

const Logan = new clientePoupança('Logan', '304i2390u', 'hibrido@email', 200, 300);

console.log(Logan);

Logan.depositarPoup(300);
console.log(Logan.saldoPoup);


// Outro exemplo de herança 
const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe"
  person.fullName.call(person2);
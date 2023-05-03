// Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// escreva aqui sua função

function adicionaClientes(cliente) {
  if (typeof cliente === 'string') {
    clientesTrybeBank.push(cliente)
  }
}

adicionaClientes('Claus')

console.log(clientesTrybeBank);

// Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array.

function removeClientes(cliente) {
  if (typeof cliente === 'string' && clientesTrybeBank.includes(cliente)) {
    clientesTrybeBank.splice(clientesTrybeBank.indexOf(cliente), 1)
  }
}

removeClientes('Claus')

console.log(clientesTrybeBank)
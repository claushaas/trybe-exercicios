let saldo = 100;

function adicionaSaldo(valor) {
  return saldo + valor;
}

console.log(adicionaSaldo(200));

function subtraiSaldo(valor) {
  return saldo - valor;
}

console.log(subtraiSaldo(50));

function calculaTaxa(taxa) {
  return (saldo * taxa) / 100;
}

console.log(calculaTaxa(5));

function divideSaldo(valor) {
  return saldo / valor;
}

console.log(divideSaldo(8));

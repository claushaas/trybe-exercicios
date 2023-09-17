const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    stock: 10,
    available: true,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    stock: 20,
    available: false,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
    stock: 50,
    available: true,
  },
  {
    id: 4,
    name: 'Product 4',
    price: 400,
    stock: 35,
    available: true,
  },
]

const filters = [
  { column: 'price', operator: 'maior que', value: 100 },
  { column: 'stock', operator: 'menor que', value: 40 },
  { column: 'available', operator: 'igual a', value: true },
]

const produtosDisponiveis = products.filter((product) => filters.every((filter) => {
  switch (filter.operator) {
    case 'maior que':
      return product[filter.column] > filter.value
    case 'menor que':
      return product[filter.column] < filter.value
    case 'igual a':
      return product[filter.column] === filter.value
    default:
      return false
  }
}
))

console.log(produtosDisponiveis)
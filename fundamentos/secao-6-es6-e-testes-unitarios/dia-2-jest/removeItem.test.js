const removeItem = require('./removeItem')

describe('testa a função removeItem', () => {
  test('remove o item 3', () => {
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })
  test('remove o item 3(2)', () => {
    expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })
  test('tenta remover item inexistente', () => {
    expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})
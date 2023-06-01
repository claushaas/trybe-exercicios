const { encode, decode } = require('./encodeDecode')

describe('testes para as funções encode e decode', () => {
  test('verifica se encode e decode são funcões', () => {
    expect(typeof encode).toEqual('function')
    expect(encode).toBeDefined()
    expect(typeof decode).toEqual('function')
    expect(decode).toBeDefined()
  })
  test('verifica a conversão da função encode', () => {
    expect(encode('aeiou')).toEqual('12345')
    expect(encode('lkjh')).toEqual('lkjh')
  })
  test('verifica a conversão da função decode', () => {
    expect(decode('12345')).toEqual('aeiou')
    expect(decode('lkjh')).toEqual('lkjh')
  })
  test('verifica o tamanho da string convertida', () => {
    expect(encode('Claus').length).toEqual(5)
    expect(decode('Cl15s').length).toEqual(5)
  })
})
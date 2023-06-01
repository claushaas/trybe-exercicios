const myFizzBuzz = require('./myFizzBuzz')

describe('testa a função myFizzBuzz', () => {
  test('verifica se retorna o valor esperado conforme o parâmetro recebido', () =>{
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
    expect(myFizzBuzz(3)).toBe('fizz')
    expect(myFizzBuzz(5)).toBe('buzz')
    expect(myFizzBuzz(2)).toBe(2)
    expect(myFizzBuzz('2')).toBeFalsy()
  })
})
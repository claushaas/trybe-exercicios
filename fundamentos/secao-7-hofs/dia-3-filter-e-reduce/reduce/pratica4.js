// 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

const countA = () => {
  const arrays = names.map((name) => name.toLowerCase().split(''))
  const lettersArray = arrays.reduce((acc, curr) => {
    return acc.concat(curr)
  }, [])
  return lettersArray.reduce((acc, curr) => {
    return curr === 'a' ? acc += 1 : acc
  }, 0)
}

console.log(countA())
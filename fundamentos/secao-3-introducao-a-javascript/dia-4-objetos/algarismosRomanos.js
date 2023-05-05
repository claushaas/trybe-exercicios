// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

const valoresDosAlgarismosRomanos = {
I: 1,
IV: 4,
V: 5,
IX: 9,
X: 10,
XL: 40,
L: 50,
XC: 90,
C: 100,
CD: 400,
D: 500,
CM: 900,
M: 1000,
}

function converterAlgarismosRomanos(string) {
  const reversedStringToArray = string.split('').reverse()

  let numero = valoresDosAlgarismosRomanos[reversedStringToArray[0]]
  
  if (reversedStringToArray.length > 1) {
    for (let index = 1; index < reversedStringToArray.length; index += 1) {
      if (valoresDosAlgarismosRomanos[reversedStringToArray[index]] < valoresDosAlgarismosRomanos[reversedStringToArray[index -1]]) {
        numero -= valoresDosAlgarismosRomanos[reversedStringToArray[index]]
      } else {
        numero += valoresDosAlgarismosRomanos[reversedStringToArray[index]]
      }
    }
  }

  console.log(numero);

  return numero
}

converterAlgarismosRomanos('XXIV')
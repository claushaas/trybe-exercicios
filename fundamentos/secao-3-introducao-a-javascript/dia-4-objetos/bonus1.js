let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.

function add(obj, key, value) {
  return obj[key] += value
}

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function listObjectKeys(obj) {
  return Object.keys(obj)
}

// Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

function showObjectSize(obj) {
  return Object.keys(obj).length
}

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

function listObjectValues(obj) {
  return Object.values(obj)
}

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

function allLessons(obj1, obj2, obj3) {
  return Object.assign({}, { lesson1: obj1 }, { lesson2: obj2 }, { lesson3: obj3 });
}

// Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

function totalStudents(obj1, obj2, obj3) {
  const lessons = allLessons(obj1, obj2, obj3)
  let totalDeEstudantes = 0
  for (let index = 0; index < Object.entries(lessons).length; index += 1) {
    totalDeEstudantes += Object.entries(lessons)[index][1].numeroEstudantes
  }

  return totalDeEstudantes
}

// Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto.

function getValueByNumber(objetc, key) {
  return Object.values(objetc)[key];
}

// Crie uma função que verifique se o par chave/valor existe na função. Essa função deve possuir três parâmetros:o objeto, o nome da chave e o valor dela. Por exemplo:

function verifyPair(obj, key, value) {
  return Object.values(obj)[Object.keys(obj).indexOf(key)] === value
}

import Swal from 'sweetalert2'

const image = document.getElementById('image')
const heroName = document.getElementById('name')
const button = document.getElementById('button')

button.addEventListener('click', () => {
  const randomID = Math.floor(Math.random() * 200) + 1
  const superHeroeAPIUrl = `https://akabab.github.io/superhero-api/api/id/${randomID}.json`
  fetch(superHeroeAPIUrl).then(response => response.json()).then(data => {
    heroName.innerHTML = data.name
    image.src = data.images.md
  }).catch((error) => {
    Swal.fire({
      title: 'Error!',
      text: 'A solicitação encontrou um erro, tente novamente.',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  })
})
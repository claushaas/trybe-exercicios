import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css'

const dogsButton = document.getElementById('dogs')
const catsButton = document.getElementById('cats')
const surpriseButton = document.getElementById('surprise')
const img = document.getElementById('img')

const fetchDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      img.src = data.message
    })
}

const fetchCat = () => {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      img.src = data[0].url
    })
}

dogsButton.addEventListener('click', () => {
  fetchDog()
})

catsButton.addEventListener('click', () => {
  fetchCat()
})

surpriseButton.addEventListener('click', () => {
  Promise.race([
    fetch('https://api.thecatapi.com/v1/images/search'),
    fetch('https://dog.ceo/api/breeds/image/random'),
  ])
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (Array.isArray(data)) {
        img.src = data[0].url
      } else {
        img.src = data.message
      }
    })
})


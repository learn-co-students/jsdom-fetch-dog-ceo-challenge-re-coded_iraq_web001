document.addEventListener('DOMContentLoaded', (event) => {

  console.log('%c HI', 'color: firebrick')

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl)
  .then(response => response.json())
  .then(result => {
    let imgContainer = document.querySelector('#dog-image-container');
    for (const element of result.message){
      let img = document.createElement('img');
      img.src = `${element}`;
      img.width = "200";
      imgContainer.appendChild(img);
    }
  })

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(response => response.json())
  .then(result => {
    let breedContainer = document.querySelector('#dog-breeds');
    let breedDropdown = document.querySelector('#breed-dropdown');
    for (const key in result.message){
      let breed = document.createElement('li');
      breed.classList.add('breed')
      breed.innerText = key;
      breedContainer.appendChild(breed);
      breed.addEventListener('click', () => breed.style.color = 'red')

      breedDropdown.addEventListener('change', (event) => {
        breed.remove();
        if (breed.innerText.charAt(0) == event.target.value){
          breedContainer.appendChild(breed);
        }
      })
    }
  })
})

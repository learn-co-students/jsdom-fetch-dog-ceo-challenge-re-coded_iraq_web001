console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function() {
  getImages()
  getDogBreeds()
})
function getImages(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(result => {
    result.message.forEach(image => addImage(image))
  });
}

function addImage(image) {
  const imgContainer = document.getElementById('dog-image-container')
  let newImage = document.createElement('img');
  newImage.src = `${image}`;
  imgContainer.appendChild(newImage);
}

function getDogBreeds(){
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(response => response.json())
  .then(result => {
    dogBreed = Object.keys(result.message);
    dogBreed.forEach(breed => addDogBreed(breed))
  });
}

function addDogBreed(breed){
  const ul = document.getElementById('dog-breeds')
  const dogBreed = document.createElement('li');
  const dropDownList = document.getElementById('breed-dropdown')
  dogBreed.textContent = `${breed}`;
  ul.appendChild(dogBreed);
  
   dogBreed.style.cursor = 'pointer'
    dogBreed.addEventListener('click', (e) => {
      dogBreed.style.color = 'violet'
    })
  
  dropDownList.addEventListener('change', (event) => {
    dogBreed.remove()
    if (event.target.value == dogBreed.textContent.charAt(0)){
      ul.appendChild(dogBreed)
    }
  
 
    
 })
}

  

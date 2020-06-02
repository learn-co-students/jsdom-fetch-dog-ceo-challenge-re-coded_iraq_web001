//new code
function getDog(){
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
let imgContainer = document.getElementById('dog-image-container');
 return fetch(imgUrl)
.then(response => response.json())
.then(dogs => {
      dogs.message.forEach((dog) => {
        image = document.createElement('img');
            image.src = dog;
            image.width= 200;
            imgContainer.appendChild(image);
      })
    })
}




function getBreed() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
   fetch(breedUrl)
   .then(response => response.json())
   .then(dogs => {
     let breedList = document.querySelector('#dog-breeds');
     let breedDropdownList = document.querySelector('#breed-dropdown');
     for (const dogBreed in dogs.message){
       let breedListItem = document.createElement('li');
       breedListItem.innerHTML = dogBreed;
       breedList.appendChild(breedListItem);
       breedListItem.addEventListener('click', () =>
        breedListItem.style.color = 'red')

       breedDropdownList.addEventListener('change', (e) => {
         breedListItem.remove();
         if (breedListItem.innerText.charAt(0) == e.target.value){
           breedList.appendChild(breedListItem);
         }
       })
     }
   })
}

document.addEventListener('DOMContentLoaded', (e) => {
  getDog();
  getBreed();
});

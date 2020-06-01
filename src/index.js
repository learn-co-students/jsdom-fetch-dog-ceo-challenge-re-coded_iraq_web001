 document.addEventListener('DOMContentLoaded', (event) => {

console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
.then(response => response.json())
.then(imgResult => {
  //after fetching the url we put the images in the  div container and give it a height and width 
  let dogImgContainer = document.getElementById('dog-image-container')
  for (const el of imgResult.message){
    let img = document.createElement('img');
    img.src = `${el}`;
    img.width = "250";
    img.height ="200";
    dogImgContainer.appendChild(img);
  }
})

const breedUrl = 'https://dog.ceo/api/breeds/list/all';
fetch(breedUrl)
.then(response => response.json())
.then(result => {
  let dogBreeds = document.getElementById('dog-breeds');
  let breedDropdown = document.getElementById('breed-dropdown');
  //this is creating the list elements and put the values in it 
  for (const key in result.message){
    let breed = document.createElement('li');
    breed.classList.add('breed');
    breed.innerText = key;
    dogBreeds.appendChild(breed);
     breed.style.color='lightred';
   if(breedDropdown.value==='a'){
     breed.style.color='red';
   }
    breedDropdown.addEventListener('change', (event) => {
      breed.remove();
      if (breed.innerText.charAt(0) == event.target.value){
        //this is for changing the color of each list 
        if(event.target.value==='b')
        {
          breed.style.color='blue';
        }
        else
        if(event.target.value==='c')
        {
          breed.style.color='green';
        }
        if(event.target.value==='d')
        {
          breed.style.color='white';
        }
        dogBreeds.appendChild(breed);
      }
    })
  }
})
})

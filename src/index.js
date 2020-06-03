console.log('%c HI', 'color: firebrick')

let betterBreedList = []
document.addEventListener("DOMContentLoaded", ()=>{

  let dogImageContainer = document.querySelector("#dog-image-container")
  let dogBreedList = document.querySelector("#dog-breeds")
  let breedDropdown = document.querySelector("#breed-dropdown")

  fetch (`https://dog.ceo/api/breeds/image/random/4`)
  .then(response => response.json())
  .then(parsed => showAllDogImages(parsed.message))
  
  function DogImage(image){
    return `<img style="display:flex; width: 25%" class="dog-image" src=${image}>`
  }
  function showAllDogImages(images){
    dogImageContainer.innerHTML += images.map(DogImage).join("")
  }


  fetch(`https://dog.ceo/api/breeds/list/all`)
  .then(response => response.json())
  .then(parsed => makeBetterBreedList(parsed.message))
  .then(improvedList => showAllDogBreeds(improvedList))
 

  function showDogBreed(breed){
    return `<li>${breed}</li>`
}

  function showAllDogBreeds(allBreeds){
    dogBreedList.innerHTML += allBreeds.map(showDogBreed).join("")
  }

  dogBreedList.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
      
      event.target.style.color = "red"
    }
  })

  breedDropdown.addEventListener("change", function(event){
    filteredBreeds = []
    selectedLetter = event.target.value
    betterBreedList.forEach(function(breed){
      if (breed[0] === selectedLetter){
        filteredBreeds.push(breed)
      } else {
        return
      }
    })
    dogBreedList.innerHTML = filteredBreeds.map(showDogBreed).join("")
  })

}) 


console.log('%c HI', 'color: firebrick')
fetch ("https://dog.ceo/api/breeds/image/random/4")
.then (res=>res.json())
.then(resolve=> {
resolve.message.map(image => addImages(image))
})

function addImages(res){
let div = document.getElementById("dog-image-container");
let img = document.createElement("img");
img.src = res;
div.appendChild(img)
}
fetch("https://dog.ceo/api/breeds/list/all")
.then (res => res.json())
.then (data =>{
 breeds = Object.keys(data.message);
      updateBreedList(breeds);
      addBreedSelectListener()})
      
  function updateBreedList(breeds) {
  let ul = document.querySelector('#dog-breeds');
  removeChildren(ul);
  breeds.forEach(breed => addBreed(breed));
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

function selectBreedsStartingWith(letter) {
  updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreedSelectListener() {
  let breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', function (event) {
    selectBreedsStartingWith(event.target.value);
  });
}

function addBreed(breed) {
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  li.innerText = breed;
  li.style.cursor = 'pointer';
  ul.appendChild(li);
  li.addEventListener('click', updateColor);
}

function updateColor(event) {
  event.target.style.color = 'blue';
}
let breeds = [];

document.addEventListener('DOMContentLoaded', function () {
  imgLoad();
  breedLoad();
});

function imgLoad() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(res=> res.json())
    .then(results => {
      results.message.forEach(image => addImage(image))
    });
}

function addImage(dogPicUrl) {
  let container = document.querySelector('#dog-image-container');
  let newImageEl = document.createElement('img');
  newImageEl.src = dogPicUrl;
  container.appendChild(newImageEl);
}

function breedLoad() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(res => res.json())
    .then(results => {

      breeds = Object.keys(results.message);
      breedUpdate(breeds);
      breeeds();
    });
}

function breedUpdate(breeds) {
  let ul = document.querySelector('#dog-breeds');
  breeedsRE(ul);
  breeds.forEach(breed => addBreed(breed));
}

function breeedsRE(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

function breeedsSelect(letter) {
  breedUpdate(breeds.filter(breed => breed.startsWith(letter)));
}

function breeeds() {
  let breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', function (event) {
    breeedsSelect(event.target.value);
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

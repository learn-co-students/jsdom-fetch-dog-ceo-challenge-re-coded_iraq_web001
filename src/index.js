console.log('%c HI', 'color: firebrick');
const li = document.getElementsByTagName('li');
console.log(li);
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
document.addEventListener('DOMContentLoaded',()=>{
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(resp => addImgElems(resp));
})

document.addEventListener('DOMContentLoaded',()=>{
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(resp => addBreeds(resp));
})

function addBreeds(obj){
  const breedsContainer = document.getElementById('dog-breeds');
  const breeds = obj.message;
  let i = 0;
  for(elem in breeds){
    const li = document.createElement('li');
    li.innerText = `${elem}`;
    li.setAttribute('id',i);
    i++;
    breedsContainer.appendChild(li);
  }
}

function addImgElems(obj){
  const imgsContainer = document.getElementById('dog-image-container');
  imgsArray = obj.message;
  const img = document.createElement('img');
  for(elem of imgsArray){
    const img = document.createElement('img');
    imgsContainer.appendChild(img);
    img.setAttribute('src',elem);
  }
}
li.addEventListener('click',changeColor);
function changeColor(event){

}

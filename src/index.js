console.log('%c HI', 'color: firebrick')


const li = document.getElementsByTagName('li');
const imageUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
document.addEventListener('DOMContentLoaded',()=>{
  fetch(imageUrl)
  .then(response => response.json())
  .then(json => addImgElems(json));
})

function addBreedsToPage(obj){
  const breedsCon = document.getElementById('dog-breeds');
  const breeds = obj.message;
  let i = 0;
  for(elem in breeds){
    const li = document.createElement('li');
    li.innerText = `${elem}`;
    li.setAttribute('id',i);
    i++;
    breedsCon.appendChild(li);}
}

function addImgElems(obj){
  const imgsCon = document.getElementById('dog-image-container');
  imgsArray = obj.message;
  const img = document.createElement('img');
  for(elem of imgsArray){
    const img = document.createElement('img');
    imgsCon.appendChild(img);
    img.setAttribute('src',elem);}
}
li.addEventListener('click',changeColor);
function changeColor(event){

}
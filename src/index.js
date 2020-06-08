let ul = document.getElementById("dog-breeds")
let dropDown = document.getElementById("breed-dropdown")
function fetchImag (){
  return fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json())
  .then(data => renderImg(data))
}
function renderImg(data){
  data.message.forEach(item => {
    let img = document.createElement("img")
    img.src = item
    let cont = document.getElementById("dog-image-container")
    cont.appendChild(img)
  });
}
fetchImag();
function fetchBreeds(){
  return fetch("https://dog.ceo/api/breeds/list/all")
  .then(res => res.json())
  .then(data => renderBreeds(data))
}
fetchBreeds();
function renderBreeds(data){
  Object.keys(data.message).forEach(item => {
    ul.insertAdjacentHTML("beforeend", `<li class= "s">${item}</li>`)
dropDown.addEventListener("change",function(){
  if(item.charAt(0) === dropDown.options[dropDown.selectedIndex].value){
    let m = document.getElementsByClassName("s")
    for( let i=0;i<m.length;i++){
      m.style.display = "flex"
        }
  }

  else{
    m.style.display="none"
  }})})
}

  ul.addEventListener('click' , (e) =>{
      e.target.style.color = 'red'
})
;

 //the filter did not work and i don't know y maybe you can figure it out and tell me//

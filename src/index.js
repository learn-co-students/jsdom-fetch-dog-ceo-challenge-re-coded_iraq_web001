document.addEventListener('DOMContentLoaded',  ()=>{ 

function fetchDogImage() {
   return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
     return response.json();
      
    })
    .then(function(json){
      appendImages(json);
    })
  }

function fetchDogBreed() {
   return fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response){
     return response.json();
      
    })
    .then(function(json){
      appendBreed(json);
    })
  }
  
  fetchDogImage();
  fetchDogBreed();
    
function appendImages(data){
  const imagDiv = document.querySelector('#dog-image-container');
  for(const imgsrc of data.message){
    let images = document.createElement('img');
    images.src = imgsrc;
    imagDiv.appendChild(images)
  }
}
let liArr = [];

function appendBreed(data){
  const breedUl = document.querySelector('#dog-breeds');
   for(const breeds in data.message){
     
    let lis = document.createElement('li');
    lis.innerHTML = breeds;
    liArr.push(lis);
    lis.addEventListener('click',handleClick);
    breedUl.appendChild(lis);
   
  }
}

function handleClick(e){
  
  e.target.style.color = "green";
}

})
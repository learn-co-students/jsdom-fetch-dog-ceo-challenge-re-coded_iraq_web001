console.log('%c HI', 'color: firebrick');

document.addEventListener("DOMContentLoaded", function(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const imgContainer = document.getElementById("dog-image-container");
  const breedDropDown = document.getElementById("breed-dropdown");
  const dogBreedsContainer = document.getElementById("dog-breeds");
  
  fetch(imgUrl)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    showDogsImg(json);
  });
  
  fetch(breedUrl)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    showDogsBreed(json);
  });
  
  function setRandomColor(e){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let colorized = "#" + randomColor;
    let elementTarget = e.target.style.color = colorized;
    return elementTarget;
  }
  
  breedDropDown.addEventListener("change", (e) => {
    let dogsBreedLi = document.getElementsByClassName("hide");
    let select = e.target.value;
    for (const li of dogsBreedLi) {
      li.style.display = "block";
    }
    for (let li of dogsBreedLi) {
      if (select === "selectOne") {
        li.style.display = "block";
      } else {
        li.innerText.charAt(0) === select
          ? (li.style.display = "block")
          : (li.style.display = "none");
      }
    }
  });
  
  function showDogsImg(dogsImg){
    for(const index of dogsImg.message){
      imgContainer.insertAdjacentHTML("beforeend", `<img src="${index}" width="400">`);
    }
  }
  
  function showDogsBreed(dogsBreed){
    for(const dBreed in dogsBreed.message){
      let li = document.createElement('li');
      li.innerText = dBreed;
      li.classList.add('hide');
      dogBreedsContainer.appendChild(li);
      li.addEventListener('click', setRandomColor);
    }
  }
  
});
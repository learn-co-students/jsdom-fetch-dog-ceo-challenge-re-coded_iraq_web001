console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", function () {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const dogImageContainer = document.getElementById("dog-image-container");
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  let dogBreedsContainer = document.querySelector("#dog-breeds");
  const breedDropdown = document.getElementById("breed-dropdown");

  fetch(imgUrl)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      let dogImg = json.message;
      dogImg.forEach(createDogImg);
    });
  fetch(breedUrl)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      let dogBreeds = Object.keys(json.message);
      dogBreeds.forEach(createBreedLi);
    });

  dogBreedsContainer.addEventListener("click", function (event) {
    if (event.target.style.color != "red") {
      event.target.style.color = "red";
    }
    else {
      event.target.style.color = "black";
    }
  });

  breedDropdown.addEventListener("change", (e) => {
    let breedLis = document.getElementsByClassName("breed-list-item");
    let select = e.target.value;
    for (let li of breedLis) {
      li.style.display = "block";
    }
    for (let li of breedLis) {
      if (select === "all") {
        li.style.display = "block";
      } else {
        li.innerText.charAt(0) === select
          ? (li.style.display = "block")
          : (li.style.display = "none");
      }
    }
  });

  function createDogImg(url) {
    dogImageContainer.insertAdjacentHTML("beforeend", `<img src="${url}">`);
  }

  function createBreedLi(breed) {
    dogBreedsContainer.insertAdjacentHTML(
      "beforeend",
      `<li class="breed-list-item"> ${breed}</li>`
    );
  }
});

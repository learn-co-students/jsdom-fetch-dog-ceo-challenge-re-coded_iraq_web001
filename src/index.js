
const imagesView = document.createElement('img');
let breedListItems;
let unorderdBreedList;
document.addEventListener('DOMContentLoaded', function(){
const imagesContainer = document.getElementById("dog-image-container");
unorderdBreedList = document.getElementById('dog-breeds');
imagesContainer.appendChild(imagesView);
})
console.log('%c HI', 'color: firebrick')
let imgsList;


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
.then(res => res.json())
.then((data) => {
    let arr = data.message;
    
    for(let i = 0; i < arr.length; i++){
        imgsList = arr[i];
        imagesView.src = arr[i];
        

    }
});
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
.then (breed => breed.json())
.then((breedInfo) => {
  
    let breedsData
    let breedArr = [];
    let breed = breedInfo.message;
    for (let breeds in breed){
        breedsData = `${breeds} ${breed[breeds]}`;
       
       breedArr.push(breedsData);
       
 
    }
    for (let i = 0; i< breedArr.length; i++){
        let listItem = breedArr[i]
        breedListItems = document.createElement('li');

        breedListItems.innerText = breedArr[i];
        unorderdBreedList.appendChild(breedListItems);

      
 }

});

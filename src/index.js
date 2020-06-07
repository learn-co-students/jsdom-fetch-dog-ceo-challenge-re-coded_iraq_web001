console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgCon=document.getElementById('dog-image-container')
fetch(imgUrl)
.then(response => response.json())
.then(json => {allImages(json.message)
console.log(json)
}
);

function allImages(message){
  const div=document.getElementById('dog-image-container')

message.forEach(name =>{
    const images=document.createElement('img')
    images.src=`${name}`
    div.appendChild(images)
  })
}

fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => {
    console.log(json)
     dogsBreed(json["message"])
  });
    
    
    function dogsBreed(json){
      const Ullist=document.getElementById('dog-breeds')

      for(const key in json){
        const allBreeds=document.createElement('li')
        allBreeds.innerHTML=`${key}`
            changeColor(allBreeds)

        Ullist.appendChild(allBreeds)
      }
    }
  
  
    function changeColor(allBreeds){
        return allBreeds.addEventListener('click', function(){
     allBreeds.style.backgroundColor="red"
   }) 
    }
    
    
    
   
    const dropDownList=document.querySelector('#breed-dropdown').selected='true'
      dropDownList.forEach(element =>{
        if(element.value === 'a')
        return element
         if(element.value === 'b')
        return element
         if(element.value === 'c')
        return element
         if(element.value === 'd')
        return element
      })
        //if (dropDownList.value=='a')
        //document.style.backgroundColor="red"
      
  console.log(dropDownList)
      

    
    
    
    
    
    
  
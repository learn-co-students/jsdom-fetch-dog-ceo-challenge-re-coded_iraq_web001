document.addEventListener('DOMContentLoaded',()=> {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
   fetch(imgUrl).then(res=>{return res.json()})
  .then(json=>
   {
  let all=json.message
  for (let i of all)
  {
    let imgsDiv=document.getElementById("dog-image-container");
    let newImage=document.createElement("img")
    newImage.src=`${i}`
    imgsDiv.appendChild(newImage)
  }
  })

  //end of the first chalenge//

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl).then(res=>{
    return res.json()
  }).then(json=>{
console.log(json)
   let all2=json.message
   for(let f in all2)
    {
      let ul= document.getElementById("dog-breeds")

      let li=document.createElement("li")
        li.classList.add("newcolor")

      li.innerHTML=`${f}`

      ul.appendChild(li)

 li.addEventListener("click",()=>li.style.color="red")

 let names=document.getElementById("breed-dropdown")

  names.addEventListener("change",(e)=>{


   li.remove();
   if(li.innerText.charAt(0)==e.target.value){

     ul.appendChild(li)


   }
 })




  }


   })



})

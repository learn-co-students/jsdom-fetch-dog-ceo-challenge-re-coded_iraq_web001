console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response=>response.json())
.then(data =>{
  console.log('data',data)
  data.message.forEach((image)=>{
    let div=document.getElementById('dog-image-container')
    div.insertAdjacentHTML(
    "beforeend",
    `  <img src=${image}>  `
)  })
})
.catch(err=>console.log('error',err))

fetch("https://dog.ceo/api/breeds/list/all")
.then(response=>response.json())
.then(data =>{
  console.log('breed',data)
let keys=Object.keys(data.message)
//console.log('keys',keys[5],'\n')
//console.log(data.message[keys[5]])
for (let breed of keys){
//  console.log(breed)

  if(data.message[breed].length !==0){

  let ul=document.getElementById('dog-breeds')
  let  li=document.createElement("li")

          for (let b of data.message[breed]){

              li.insertAdjacentHTML(  "beforeend",
                                   `<p>${b}</p>`)
                      }
  ul.appendChild(li)
  li.addEventListener("click",()=>li.style.color = "red")
}
}
//filter
let sel=document.getElementById('breed-dropdown');
sel.addEventListener("change",()=>{
   let value = sel[sel.selectedIndex].text;
   filter_fun(value,data,keys)

})
///////
})
.catch(err=>console.log('error',err))
})

function filter_fun(value,data,keys){
let ul=document.getElementById('dog-breeds')
ul.innerHTML=""
let  li=document.createElement("li")
  for (let breed of keys){
  //  console.log(breed)

    if(data.message[breed].length !==0){
            for (let b of data.message[breed]){
              if(b[0]==value){

                li.insertAdjacentHTML(  "beforeend",
                                     `<p>${b}</p>`)
                        }
                      }
    ul.appendChild(li)
    li.addEventListener("click",()=>li.style.color = "red")
  }
  }

}

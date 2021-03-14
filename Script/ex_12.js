
let image =document.querySelector("section>pre").textContent
let affichage=document.querySelector("footer>div")
let showImag=document.createElement("img")
affichage.appendChild(showImag)
console.log(affichage)

function StockAndSowImage(){
localStorage.setItem("image",image)
// console.log(localStorage)
let imageStored=localStorage.getItem("image")
// console.log(imageStored)
    if(localStorage.getItem("image")){
        affichage.innerHTML=`<img src="${imageStored}">`
      
    }else{
        affichage.textContent="no photo"
    }
}
StockAndSowImage();
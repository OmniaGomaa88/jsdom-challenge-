let Augment= document.querySelector("footer>div button:first-child")
let diminuer= document.querySelector("footer>div button:nth-child(2)")
let count=16
// button augmenter le fontSize
function Augmenter (){
    Augment.style.backgroundColor="gray"
    diminuer.style.backgroundColor="white"
   let size= count ++
    document.body.style.fontSize=size+"px"
    
}
// button dimineur le fontSize
function diminuerFont(){
    Augment.style.backgroundColor="white"
    diminuer.style.backgroundColor="gray"
    let size= count --
    document.body.style.fontSize=size+"px"
}
Augment.addEventListener("click",Augmenter)
diminuer.addEventListener("click",diminuerFont)
// ....
// changer le color de fond
let colors=Array.from(document.querySelectorAll("select"))
colors.forEach(color=>{
    color.onchange=()=>{
        console.log(color.value)
        document.body.style.backgroundColor=color.value
    }
   
})

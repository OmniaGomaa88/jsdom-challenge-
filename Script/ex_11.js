let link =document.querySelector("footer>div a")
let cader=document.querySelector("footer>div")
let footer=document.querySelector("footer")
footer.appendChild(document.createElement('div'))
let deseumDiv=document.querySelector('footer div:last-child')
deseumDiv.appendChild(document.createElement('button')).textContent="Supprimer le cookie"
deseumDiv.style.display="none"

link.addEventListener('click',function creatCookie(){
    // creer le coockie
document.cookie=("acceptsCoookie=true; expires=Thu Feb 06 2021 12:05:02 GMT+0100 (Central European Standard Time")
console.log(document.cookie)
deseumDiv.style.display="block"
        cader.style.display='none'
})
const text=document.cookie.split("=")
console.log(text[1])
  if(text[1]==="true") {
    // supremer le Button dans le cadre blanc
    cader.style.display='none'
    deseumDiv.style.display="block"
    //  creer button suprmer
    //   creer function pour suprmet le cookie avec date en passer
      document.querySelector("footer>div button:last-child").addEventListener('click' ,function supremeCookie(){
        document.cookie=("acceptsCoookie=; expires=Thu Feb 03 2021 12:05:02 GMT+0100 (Central European Standard Time")
        console.log(document.cookie)
        deseumDiv.style.display="none"
        cader.style.display='block'
     
    }) 
    }




    
      
    
    

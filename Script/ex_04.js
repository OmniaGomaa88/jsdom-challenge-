let arrayCaractair =[ ]
function detect(e){
    let caracteir =e.key 
    arrayCaractair.push(caracteir)
    // console.log(arrayCaractair)
    if (arrayCaractair.length > 42) {
        arrayCaractair.shift();

}
console.log(arrayCaractair)
let cadrBlanc = document.querySelector("footer div")
 cadrBlanc.textContent=arrayCaractair
}
window.addEventListener('keydown',detect)
 
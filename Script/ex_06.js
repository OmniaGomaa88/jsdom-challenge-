
let TextBlock=document.querySelector("footer>div")
function Hero(name,role,Poinintelligence,Pointforce){
this.name=name
this.role=role
this.Poinintelligence=Poinintelligence
this.Pointforce=Pointforce
}
var mage = new Hero("amadeus", "mage", 10, 3);
var guerrier = new Hero("pontius", "guerrier", 3, 10);
let p=" "
Hero.prototype.toString= function (){
    TextBlock.appendChild(document.createElement('p'));
p=(`"Je suis " ${ this.name }  le ${this.role} j'ai ${this.Poinintelligence} et ${this.Pointforce }  points de force ! \n` )  
document.querySelector("footer>div p:last-child").textContent=p

}

mage.toString() 
 guerrier.toString();
// ........................



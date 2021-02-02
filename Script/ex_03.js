var TextBlock = document.querySelector('footer>div');
TextBlock.addEventListener('click', function(){
   
    let name=prompt("Quel est votre nom?")
    do{
        name
    }
    while(name.length!==0){
        window.confirm("Etes vous sur que "+ name +" est votre nom?")
    }
       

       
if(confirm){
  alert("Bonjour "+ name)
      }
   

});

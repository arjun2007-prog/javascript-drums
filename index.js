

for(var i=0;i<7;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function() {
    var html=this.innerHTML;
    press(html);
    addAnimation(html);
    });
document.addEventListener("keydown",function(event){
    console.log(event);
    press(event.key);
    addAnimation(event.key);
});
}    

  function press(key)
  {
    switch (key) {
        case "w" :
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

         case "s":
                var audio= new Audio("sounds/tom-3.mp3");
                audio.play();
                break;

         case "d":
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

         case "j":
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
            break;
        
         case "k":
                var audio= new Audio("sounds/crash.mp3");
                audio.play();
                break;   
          
            case "l":
                    var audio= new Audio("sounds/kick-bass.mp3");
                    audio.play();
                    break;     

            default:console.log("error.");
            break;
  }
}
 function addAnimation(currentPress){
    var currentAction=document.querySelector("."+currentPress);
    currentAction.classList.add("pressed");
    setTimeout(function(){
        currentAction.classList.remove("pressed");
    },300);
 }



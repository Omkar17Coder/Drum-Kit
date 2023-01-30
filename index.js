var drums=document.querySelectorAll(".drum").length;


for(var i=0;i<drums ;i++){
 document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
    var ButtonValue=this.innerHTML;
    MakeSound(ButtonValue);

    }
)
// For Key Stokes.


}

document.addEventListener("keypress",function(event){
    MakeSound(event.key);



})

function MakeSound(value){

    switch(value){
        case "w":
          var tom1=new Audio('tom-1.mp3');
          tom1.play();
          break;
      case "a":
          var tom2=new Audio('tom-2.mp3');
          tom2.play();
          break;
      case "s":
          var tom3=new Audio('tom-3.mp3');
          tom3.play();
          break;
  
          case "d":
              var tom4=new Audio('tom-4.mp3');
              tom4.play();
              break;
              case "j":
                  var tom5=new Audio('tom-2.mp3');
                  tom5.play();
                  break;
                  case "k":
                      var tom6=new Audio('snare.mp3');
                      tom6.play();
                      break;
  
                      case "l":
                          var tom7=new Audio('kick-bass.mp3');
                          tom7.play();
                          break;        
      }
  
  

}
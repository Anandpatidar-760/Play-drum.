// document.querySelector("button").addEventListener("click",clickfun)

// function clickfun(){
//     alert("i got clicked");
// }

// can be written as 👇
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonvar = this.innerHTML;
    makesound(buttonvar);
  });
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
} );

function makesound(key){
    
    switch (key) {
        case "a":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;
        case "b":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
        case "c":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
        case "d":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
        case "e":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
        case "f":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
        case "g":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
  
        default:
            console.log(key);
          break;
      }
}
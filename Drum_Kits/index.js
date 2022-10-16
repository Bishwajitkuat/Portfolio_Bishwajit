//detecting mouse click on button

var totalDrumNumber = document.querySelectorAll(".drum").length;

for (i= 0; i<totalDrumNumber; i++ ) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

// detecting keystrock

document.addEventListener("keydown", function(){
  playSound(event.key);
  buttonAnimation(event.key);
});

//adding animation by click or key press and remove animation class

function buttonAnimation(keyPress) {
  var keyAnimation = document.querySelector("."+keyPress);
  keyAnimation.classList.add("pressed");
// pressed class will be removed after certain time
  setTimeout(function(){
    keyAnimation.classList.remove("pressed");
  }, 100)
}


// function play sounds, parameter is letter as string

function playSound(soundKey) {
  var soundInput = soundKey;
  switch (soundInput) {
    case "a":
      var audio = new Audio("sounds\\crash.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds\\kick-bass.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds\\snare.mp3");
      audio.play();
      break;
    case "f":
      var audio = new Audio("sounds\\tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds\\tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds\\tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds\\tom-4.mp3");
      audio.play();
      break;


    default:
      console.log("Something is wrong!")

  }
}

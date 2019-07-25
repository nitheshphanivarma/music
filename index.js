var noofdrumbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noofdrumbuttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    music(this.innerHTML);
    buttonAnimate(this.innerHTML);
  });
}
document.addEventListener("keypress", function(event) {
  music(event.key);
});

function buttonAnimate(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed")
  }, 100);
}

function music(key) {
  switch (key) {
    case "w":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "a":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "s":
      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(this.innerHTML);

  }

}

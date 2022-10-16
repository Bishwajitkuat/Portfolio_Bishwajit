/*Random number and dicee address generator for img1 */
function playerOneDraw () {
  var randomNumber1 = Math.floor(Math.random()*6) +1;
  var randomDiceeAddress1 = "images\\dice"+randomNumber1+".png";
  document.querySelector("img.img1").setAttribute("src", randomDiceeAddress1);
  return randomDiceeAddress1
}


/*Random number and dicee address generator for img2 */
function playerTwoDraw () {
  var randomNumber2 = Math.floor(Math.random()*6) +1;
  var randomDiceeAddress2 = "images\\dice"+randomNumber2+".png";
  document.querySelector("img.img2").setAttribute("src", randomDiceeAddress2);
  return randomDiceeAddress2
}


/* Listen for click and generate random number give results */
var playButton = document.querySelector("h2");
playButton.addEventListener("click", function(){
  playButton.classList.add("btn-warning");
  setTimeout(function(){
    playButton.classList.remove("btn-warning");
  }, 100);
  var playerOneScore = playerOneDraw();
  var playerTwoScore = playerTwoDraw();
  if (playerOneScore === playerTwoScore) {
    document.querySelector("h1").innerHTML = "Draw!"
  }
  else if (playerOneScore > playerTwoScore) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!"
  }
  else {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩"
  }
});

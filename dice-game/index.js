var rollButton = document.getElementById("roll-button");

rollButton.addEventListener("click", rollDice);

function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  var randomDiceImage = "images/dice" + randomNumber1 + ".png";

  var image1 = document.querySelector(".img1");
  image1.setAttribute("src", randomDiceImage);

  var randomNumber2 = Math.floor(Math.random() * 6 + 1);
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  var image2 = document.querySelector(".img2");
  image2.setAttribute("src", randomImageSource2);

  var msg = document.querySelector(".display-msg");

  if (randomNumber1 > randomNumber2) {
    msg.innerHTML = "Player 1 wins!";
  } else if (randomNumber2 > randomNumber1) {
    msg.innerHTML = "Player 2 wins!";
  } else {
    msg.innerHTML = "It's a draw!";
  }
}

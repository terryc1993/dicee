var player1 = prompt("What is player one's name?");
var player2 = prompt("What is player two's name?");

document.querySelector(".player1").innerHTML = player1;
document.querySelector(".player2").innerHTML = player2;

function dicee() {
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1 + 1);
console.log(randomNumber1);
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2 + 1);
console.log(randomNumber2);
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩"+player1+" Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = player2+" Wins🚩";
} else {
  document.querySelector("h1").innerHTML = "🚩Draw!🚩";
}
}

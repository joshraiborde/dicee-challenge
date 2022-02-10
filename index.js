var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var images1 = "images/dice" + randomNumber1 + ".png";
var images2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", images1);
document.querySelector(".dice .img2").setAttribute("src", images2);

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw! 😑 Click To Refresh";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🥳 Click To Refresh";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🤩 Click To Refresh";
}
// ANGELA'S SOLUTION

// var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png to dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png to images/dice6.png

// var image1 = document.querySelectorAll("img")[0]

// image1.setAttribute("src", randomImageSource)



// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png to images/dice6.png

// document.querySelectorAll("img")[0]

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player 1 Wins!"
// } else if (randomNumber2 > randomNumber1) {
//     document.querySelector("h1").innerHTML = "Player 2 Wins!"
// } else {
//     document.querySelector("h1").innerHTML = "Draw!"
// }
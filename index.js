// for dice1

var randomNumber1 = Math.floor(Math.random()*6) + 1;

// var randomDiceImg = "dice" + randomNumber1 + ".png";

var randomImgSrc1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSrc1);

// for dice2

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomImgSrc2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImgSrc2);

//Declearing the winner

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";;
}else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}


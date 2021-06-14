//player1


var ran1 = Math.random();
ran1 *= 6;
ran1 = Math.floor(ran1) + 1;
var image1 = "images/dice"+ran1+".png";

document.getElementById("player1").src = image1;

var ran2 = Math.random();
ran2 *= 6;
ran2 = Math.floor(ran2) + 1;

var image2 = "images/dice"+ran2+".png";
document.getElementById("player2").src = image2;


if(ran1 > ran2)
{
  document.querySelector("h1").innerHTML = "<img class = 'p1 flag' src='https://image.flaticon.com/icons/png/512/2164/2164733.png' alt='flag-image'>Player1 Wins";
}

if(ran1 < ran2)
{
  document.querySelector("h1").innerHTML = "Player2 Wins<img class = 'p2 flag' src='https://image.flaticon.com/icons/png/512/2164/2164733.png' alt='flag-image'>";
}

if(ran1 == ran2)
{
  document.querySelector("h1").innerText = "!!!DRAW!!!";
}

//player1


var ran1 = Math.random();
ran1 *= 6;
ran1 = Math.floor(ran1) + 1;

var ran2 = Math.random();
ran2 *= 6;
ran2 = Math.floor(ran2) + 1;

if(ran1 == 1)
{
  document.getElementById("player1").src = "images/dice1.png";
}
if (ran1 == 2)
{
   document.getElementById("player1").src = "images/dice2.png";
}
if (ran1 == 3)
{
  document.getElementById("player1").src = "images/dice3.png";
}
if (ran1 == 4)
{
   document.getElementById("player1").src = "images/dice4.png";
}
if (ran1 == 5)
{
document.getElementById("player1").src = "images/dice5.png";
}
if (ran1 == 6)
{
document.getElementById("player1").src = "images/dice6.png";
}


if(ran2 == 1)
{
  document.getElementById("player2").src = "images/dice1.png";
}
if (ran2 == 2)
{
   document.getElementById("player2").src = "images/dice2.png";
}
if (ran2 == 3)
{
  document.getElementById("player2").src = "images/dice3.png";
}
if (ran2 == 4)
{
   document.getElementById("player2").src = "images/dice4.png";
}
if (ran2 == 5)
{
document.getElementById("player2").src = "images/dice5.png";
}
if (ran2 == 6)
{
document.getElementById("player2").src = "images/dice6.png";
}

if(ran1 > ran2)
{
  document.querySelector("h1").innerText = "Player1 Wins";
}

if(ran1 < ran2)
{
  document.querySelector("h1").innerText = "Player2 Wins";
}

if(ran1 == ran2)
{
  document.querySelector("h1").innerText = "!!!DRAW!!!";
}

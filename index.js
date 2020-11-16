var randomno1 = Math.floor(Math.random() * 6) + 1 ;


var randomimage = "d" + randomno1 + ".png";


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" ,  randomimage);


var randomno2 = Math.floor(Math.random() * 6)+1;

var randomimage2 = "d" + randomno2 +".png"

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomimage2);


if(randomno1>randomno2)
{
document.getElementById("h").innerHTML = "player1 wins";
}
else if (randomno2>randomno1)
{
  document.getElementById("h").innerHTML = "player2 wins";
}

else{
  document.getElementById("h").innerHTML = "draw";
}

//First Dice

var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomImage1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage1);



//second dice 

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImage2);
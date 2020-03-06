/*
Based on Coding Challange 30 - Danial Shiffman / Coding Train
https://thecodingtrain.com/CodingChallenges/030-phyllotaxis.html

Becca Rose 
March 2020
made @ coding club PM Studio in 
b   r   i   s  t  o   l ll l l l 
*/

var n = 0;
let c = 2;
fillCol = 0;
var img = [];
i = 1;
var sizeX_Y = 70;
randX = 0;
randY = 0;
anglezz = 200;
imageRound=0;
//var x_location;
//var y_location;


function preload() {
    // load images
    for (var i = 1; i < 14; i++) {
        img[i] = loadImage("imgs/" + i + ".png");
        print(i);
    }
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(0);
    angleMode(DEGREES);
    colorMode(HSB);
    imageMode(CENTER);
   // var x_location = width / 2;
///    var y_location = height / 2;
    // i=~~random(1,14);
      //   console.log("x= " + x_location);
    //    console.log("y= " + y_location);

}


function draw() {
    //background(0);
    phyllotaxis();
}

function phyllotaxis() {
    // background(0);

   
    var a = n * anglezz;

    var r = c * sqrt(n);
    var x = r * cos(a) + width/2;
    var y = r * sin(a) + height/2;
    //  fill(n % 255);
    // noStroke();
    //tint(n%255);
    image(img[i], x, y, sizeX_Y, sizeX_Y);


    //    rect(x, y, 15, 15, n%255);
    //fillCol++;
    n++;
      console.log("round" + imageRound + " n = " + n);


    ///////////////
    // change it up
    ///////////////
    if (n > 150) {
        i = ~~random(1, 14);
        n = ~~random(100);
        c = random(100);
       sizeX_Y = random(50, 200);
        anglezz = random(359);
        imageRound++;
      //  x_location = ~~random((width / 2) - 10, (width / 2) + 10);
    //    y_location = ~~random((height / 2) - 10, (height / 2) + 10);
        
      //   console.log(n);
      //  console.log("x= " + x_location);
    //    console.log("y= " + y_location);

    

    }
}

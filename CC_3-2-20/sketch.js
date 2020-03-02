var n = 0;
let c = 2;
fillCol = 0;
var img = [];
i = 1;
var sizeX_Y = 70;
randX=0;
randY=0;
anglezz = 200;


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
   // i=~~random(1,14);

}




function draw() {
    //background(0);
    phyllotaxis();

}

function phyllotaxis() {
    // background(0);

    var a = n * anglezz;

    var r = c * sqrt(n);
    var x = r * cos(a) + width / 2;
    var y = r * sin(a) + height / 2;
  //  fill(n % 255);
    noStroke();
    //tint(n%255);
    image(img[i], x+randX, y+randY, sizeX_Y, sizeX_Y);


    //    rect(x, y, 15, 15, n%255);
    //fillCol++;
    n++;
    console.log(n);
    
    
    ///////////////
    // change it up
    ///////////////
    if (n > 150) {
        i=~~random(1,14);
        n = random(100);
        c = random(100);
        sizeX_Y = random(50,1000);
        anglezz= random(10,300);
        
        //randX=random(100, width-100);
       // randY=random(100, height-100);
        
        
    
    }

}

// practice website

let mainImg, boardImg, schematicImg, toyImg, toy1Img, PRRRRRT;
let groupX, groupY, schematicX, schematicY, toyX, toyY, toy1X, toy1Y, PRRRRRTX, PRRRRRTY;

let practice1, practice2, practice3, practice4, practice5;

let text1 = "Schematic - the board is designed with an open source software that can be used with some basic instruction";
let text2 = "Gatherings - organinsing different kinds of gatherings where people who are either interested in the tech / the music / or the textiles get to getter to assemble on of the boards - such as a workshop in an arts space, or a meet-up in a hackspace"
let text5 = "";
let text3 = "Things - In the workshops or the gatherings people make things that they then take with them (in this case they have made a stuffed synth)";
let text4 = "Sounds - There is space to jam or make music with the stuffed synhts that people make";


function preload() {
    mainImg = loadImage("board.png");
    groupImg = loadImage("group.png");
    schematicImg = loadImage("schematic.png");
    toyImg = loadImage("toy.png");
    toy1Img = loadImage("toy1.png");
    PRRRRRT = loadImage("PRRRRRT.png");
}

function setup() {
    imageMode(CENTER);
    createCanvas(windowWidth, windowHeight);
    practice1 = new Practice(schematicImg, 150, 150, text1, 20);
    practice2 = new Practice(groupImg, 180, height - 300, text2, 20);
    practice3 = new Practice(toyImg, width - 200, height - 350, text5, 20);
    practice5 = new Practice(toy1Img, width - 100, height - 250, text3, 20);

    practice4 = new Practice(PRRRRRT, width - 250, 100, text4, 20);

    // make some random values for x + y

    practice1.display(); //run the display function of the object
    practice2.display(); //run the display function of the object
    practice3.display(); //run the display function of the object
    practice4.display(); //run the display function of the object
    practice5.display(); //run the display function of the object



    image(mainImg, width / 2, height / 2);

} //end of setup

function draw() {
    // background(255);



} //end of draw


class Practice {

    // Constructor (happens once in setup when you say "new walker"
    constructor(img, x, y, textz, textS) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.textz = textz;
        this.textS = textS;

    }


    display() {
        stroke(0);
        //point(x, y);
        //ellipse(this.x, this.y, 100, 100);


        line(this.x, this.y, width / 2, height / 2);
        textSize(this.textS);
        image(this.img, this.x, this.y);

        if (this.x < width / 2) {
            text(this.textz, this.x + 10 + (this.img.width / 2), this.y, 300, 1000);
        } else {
            text(this.textz, this.x -(this.img.width)- 100, this.y, 300, 1000);
        }
        // image(img1, x-100, y-100, img1.width/6, img1.height/6);
    }

}

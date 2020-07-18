/*

making a way of making mitten patterns we want

basic design
- draw a small motif
- tranlate this into pixels
- edit the pixels incase it needs tweeking
- arrange this into repetative pattern
- pointed or curved top
- prints out instructions into a board on pdf
- differnt designs on front to back
- colour pallette (2 or 3)

wish list
- have a choice of repetative patterns.
- differnt kinds of thumb patterns and style
- differnt kinds of cuff pattern
- change the size of glove
- some examples of knitted pieces
- change the render to knit mode to see what the stitches would look like
- interactive knitter for phone app (keep track of stiches)
- library of designs to addapt
- tips on knitting

// tik tak toe
//https://www.youtube.com/watch?v=GTWrWM1UsnA


*/

// to do make mitten shape and work out pattern according to this
// make a knit style render

// make an array to keep track of drawing space for pattern
let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

let w, h;
let patternSpace;
let drawSize = 500;

let stitchIndexX;
let stitchIndexY;
let stitchGridsize = 5;
let stitchin;
let stitchout;

//background colour
let backgroundColour = 0;
//pattern colour

let patternColour = 125;

function setup() {
    createCanvas(700, 600); //create a space to draw design on
    background(patternColour);
    rectMode(CENTER);
    //   imageMode(CENTER);

    // number of stitches per grid (oveal size of grid / number of stitches you want in grid)
    w = drawSize / stitchGridsize * .80;
    h = drawSize / stitchGridsize * .80;

    // draw some grid lines
    for (var i = w; i < drawSize; i = i + w) {
        for (var j = h; j < drawSize; j = j + h) {
            stroke(255);
            line(i, 0, i, drawSize * 1.1);
            line(0, j, drawSize, j);
        }
    }

} //end of setup


function keyPressed() {

    tilePattern(); // for testing - press a key to render the mitten pattern
}

function mousePressed() {

drawPixels();

} //end of mousePressed

function drawPixels(){
        // map the mouse pressed value to the array so that  you can store the drawing you make
    stitchIndexX = floor(mouseX / w);
    stitchIndexY = floor(mouseY / h);
    var x = w * stitchIndexX + w / 2;
    var y = h * stitchIndexY + h / 2;
    console.log("iX = " + stitchIndexX + " iY= " + stitchIndexY);
    console.log("old stitch = " + board[stitchIndexY][stitchIndexX]);
    
    // when you are drawing a new pixel, if its 0 then change (splice) to x and vice versa
    if (board[stitchIndexY][stitchIndexX] == 0) {
        board[stitchIndexY][stitchIndexX] = 1;
        //    board[stitchIndexY].splice(stitchIndexX, 0, 1);
        console.log("new stitch = " + board[stitchIndexY][stitchIndexX]);
        // and colour X stitch as background colour
        noStroke();
        fill(backgroundColour); 
        rect(x, y, w - 1, h - 1);
    } else {
        board[stitchIndexY][stitchIndexX] = 0;
        // board[stitchIndexY].splice(stitchIndexX, 0, 1);
        console.log("new stitch = " + board[stitchIndexY][stitchIndexX]);
        // and colour O stitch as background colour
        noStroke();
        fill(patternColour); //make pattern colour
        rect(x, y, w - 5, h - 5);
    }
}

// this is the mitten visualisaion space
function singlePattern(xStart, yStart) {

    // first make small version of the pattern
    console.log(board);
    console.log("making pattern");
    // loop to tranlate draw into pattern
    for (let i = 0; i < stitchGridsize; i++) {
        for (let j = 0; j < stitchGridsize; j++) {
            if (board[j][i] == 1) {
                noStroke();
                fill(backgroundColour);
            } else {
                noStroke();
                fill(patternColour);
            }
            let newW = i * 10;
            let newY = j * 10;
            // using starting points from tile pattern
            rect(xStart + newW, yStart + newY, 5, 5);

        } //j
    } //i


} //end of singlePattern

function tilePattern() {

    for (i = 0; i <= 2; i++) {
        for (j = 1; j <= 6; j++) {
            x = drawSize + 70 * i;
            y = height - 70 * j;
            singlePattern(x, y);

        }
    }

}

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

function preload() {
    stitchin = loadImage("imgs/stitch_in.png");
    stitchout = loadImage("imgs/stitch_out.png");
}

function setup() {
    createCanvas(700, 600);
    //create a space to draw design on
    background(0);
    rectMode(CENTER);
    imageMode(CENTER);
    // number of stitches per grid (oveal size of grid / number of stitches you want in grid)
    w = drawSize / stitchGridsize * .80;
    h = drawSize / stitchGridsize * .80;

    // draw some grid lines
    for (var i = w; i < drawSize; i = i + w) {
        for (var j = h; j < drawSize; j = j + h) {
            stroke(255);
            line(i, 0, i, drawSize * 1.1);
            line(0, j, drawSize, j);
              //   image(stitchout, x, y);

        }
    }



    //    beginShape();
    //    
    //    curveVertex((w / 2) - 15, h - 2);
    //    curveVertex(15, h - 14);
    //    curveVertex(8, 20);
    //    curveVertex((w / 2) - 4, 8);
    //    curveVertex((w / 2) - 10, h - 10);
    //    curveVertex(12, h - 6);
    //    curveVertex((w / 2) - 15, h - 2);
    //    endShape();
    //    
    //        beginShape();
    //     curveVertex((w / 2) - 15, h - 2); // random not sure how this one fits
    //     curveVertex(w-5, h - 14); // left bottom corner start
    //     curveVertex(w-8, 20); // left top corner
    //     curveVertex((w / 2) + 4, 8); // right top corner
    //     curveVertex((w / 2) + 10, h - 10); // right bottom corner
    //     curveVertex(w-12, h - 6); // left bottom corner end
    //     curveVertex((w / 2) + 15, h - 2); // random not sure how this 
    //    endShape();
    //
    //    strokeWeight(5);
    //    stroke(0);
    //    point((w / 2) - 15, h - 2); // random not sure how this one fits
    //    point(5, h - 14); // left bottom corner start
    //    point(8, 20); // left top corner
    //    point((w / 2) - 4, 8); // right top corner
    //    point((w / 2) - 10, h - 10); // right bottom corner
    //    point(12, h - 6); // left bottom corner end
    //    point((w / 2) - 15, h - 2); // random not sure how this 
    //    strokeWeight(1);
    //    stroke(255);
    //
    //    
    //     strokeWeight(5);
    //    stroke(0);
    //    point((w / 2) - 15, h - 2); // random not sure how this one fits
    //    point(w-5, h - 14); // left bottom corner start
    //    point(w-8, 20); // left top corner
    //    point((w / 2) + 4, 8); // right top corner
    //    point((w / 2) + 10, h - 10); // right bottom corner
    //    point(w-12, h - 6); // left bottom corner end
    //    point((w / 2) + 15, h - 2); // random not sure how this 
    //    strokeWeight(1);
    //    stroke(255);


    //    push(); // Start a new drawing state
    //    fill(0, 125);
    //    rotate(radians(345));
    //    translate(58, h-30);
    //ellipse(0, 0, (w/2)-8, h); 
    //pop(); // Restore original state
    //    
    //       push(); // Start a new drawing state
    //  fill(0, 125);
    //    rotate(radians(15));
    //    translate(38,h-57);
    //ellipse(0, 0, (w/2)-8, h); 
    //pop(); // Restore original state
    //    

    //    strokeWeight(5);
    //    //start points
    //    point((w / 2) - 20, h - 10); // random not sure how this one fits
    //    point(10, h - 1); // left bottom corner start
    //    point(10, 20);     // left top corner
    //    point((w / 2) - 8, 5);     // right top corner
    //    point((w / 2) - 10, h - 1);     // right bottom corner
    //    point(10, h - 1); // left bottom corner end
    //    point((w / 2) - 20, h - 10); // random not sure how this one fits
    //    strokeWeight(1); 

    // draw a basic mitten


    // for (i = 0; i < 5; i++) {
    //   for (j = 0; j < 5;j++) {
    //     var x = drawSize + (i * 10);
    //     var y = height-10 - (j * 10);
    //     noFill();
    //     stroke(255);
    //   //  rect(x, y, 5, 5);
    //     text(x, y, board[i][j]);

} //end of setup

function draw() {

} //end of draw


function keyPressed() {

    tilePattern();

}

function mousePressed() {

    // map the mouse value to the array

    stitchIndexX = floor(mouseX / w);
    stitchIndexY = floor(mouseY / h);
    var x = w * stitchIndexX + w / 2;
    var y = h * stitchIndexY + h / 2;
    console.log("iX = " + stitchIndexX + " iY= " + stitchIndexY);
    console.log("old stitch = " + board[stitchIndexY][stitchIndexX]);
    // if its o then change (splice) to x and vice versa
    if (board[stitchIndexY][stitchIndexX] == 0) {
        board[stitchIndexY][stitchIndexX] = 1;
        //    board[stitchIndexY].splice(stitchIndexX, 0, 1);
        console.log("new stitch = " + board[stitchIndexY][stitchIndexX]);
        // and colour X stitch


        noStroke();


        //fill(40);
        // rect(x, y, w-1, h - 1);
        image(stitchin, x, y);
   
    } else {

        board[stitchIndexY][stitchIndexX] = 0;
        // board[stitchIndexY].splice(stitchIndexX, 0, 1);
        console.log("new stitch = " + board[stitchIndexY][stitchIndexX]);
        /// and colour O stich
        noStroke();
        fill(200, 0, 100);
        rect(x, y, w - 5, h - 5);
    }

} //end of mousePressed


function singlePattern(xStart, yStart) {

    // first make small version of the pattern
    // board now has a bunch of new
    console.log(board);
    console.log("making pattern");

    // loop to  make a repeat pattern

    // loop to tranlate draw into pattern
    for (let i = 0; i < stitchGridsize; i++) {
        for (let j = 0; j < stitchGridsize; j++) {
            if (board[j][i] == 1) {
                noStroke();
                fill(0);
            } else {
                noStroke();
                fill(200, 0, 100);
            }

            let newW = i * 10;
            let newY = j * 10;
            // using starting points from tile pattern
            rect(xStart + newW, yStart + newY, 5, 5);

        } //j
    } //i


} //end of makePattern

function tilePattern() {

    for (i = 0; i <= 2; i++) {
        for (j = 1; j <= 6; j++) {
            x = drawSize + 70 * i;
            y = height - 70 * j;
            singlePattern(x, y);

        }
    }

}

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

let board = [
  ["O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O"],
];

let w, h;
let patternSpace;
let drawSize = 500;

function setup() {
  createCanvas(700, 500);
  patternSpace = createGraphics(width - drawSize, height)
  background(200, 0, 100);
  rectMode(CENTER);
  w = drawSize / 5;
  h = drawSize / 5;

  // draw some grid lines
  for (var i = w; i < drawSize; i = i + w) {
    for (var j = h; j < drawSize; j = j + h) {
      stroke(255)
      line(i, 0, i, drawSize)
      line(0, j, drawSize, j)
    }
  }

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

  makePattern();




}

function mousePressed() {

  // map the mouse value to the array

  let stitchIndexX = floor(mouseX / w);
  let stitchIndexY = floor(mouseY / h);
  var x = w * stitchIndexX + w / 2;
  var y = h * stitchIndexY + h / 2;
  console.log("iX = " + stitchIndexX + " iY= " + stitchIndexY);
  console.log("old stitch = " + board[stitchIndexY][stitchIndexX]);
  // if its o then change (splice) to x and vice versa
  if (board[stitchIndexY][stitchIndexX] == "O") {
    board[stitchIndexY].splice(stitchIndexX, 0, "X");
    console.log("new stitch = " + board[stitchIndexY][stitchIndexX]);
    // and colour X stitch
    fill(0);
    ellipse(x, y, w - 10, h - 10);
  } else {
    board[stitchIndexY].splice(stitchIndexX, 0, "O");
    console.log("new stitch = " + board[stitchIndexY][stitchIndexX]);
    /// and colour O stich
    noStroke();
    fill(200, 0, 100);
    rect(x, y, w - 5, h - 5);
  }

} //end of mousePressed


function makePattern() {

  patternSpace.background(0);
  image(patternSpace, drawSize, 0);

  // first make small version of the pattern
  // board now has a bunch of new
  console.log(board);
  console.log("making pattern");
  // now make a repeat pattern



} //end of makePattern

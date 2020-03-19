//inktober 2017
//8
//lemons
//this p5 play library is amazing thankyou.

var walker;
var closedLemon;
var closedLemon1;

function setup() {
    createCanvas(windowWidth, windowHeight);

    song = loadSound("lemon_sound.wav");
    //WALKER
    walker = createSprite(width / 2, height / 4);
    walker.addAnimation("walking", "walker001.png", "walker003.png");
    walker.addAnimation("still", "walker001.png");
} //end of setup

function draw() {
    background(102, 255, 102);

    //every 10 frames
    if (frameCount % 40 == 0) {

        var num = ~~random(5);

        switch (num) {
            case 0:
                console.log("Zero"); // Does not execute
                closedLemon = createSprite(walker.position.x, walker.position.y - 200);
                closedLemon.addAnimation("normal", "closedLemon001.png");
                closedLemon.rotation = random(360);
                // closedLemon.rotation = random(360);
                closedLemon.life = 1000;

                break;
            case 1:
                console.log("One"); // Prints "One"
                closedLemon1 = createSprite(walker.position.x, walker.position.y - 120);
                closedLemon1.addAnimation("normal", "closedLemon1001.png");
                closedLemon1.rotation = random(360);
                closedLemon1.life = 1000;
                break;

            case 2:
                console.log("One"); // Prints "One"
                closedLemon2 = createSprite(walker.position.x, walker.position.y - 120);
                closedLemon2.addAnimation("normal", "closedLemon2001.png");
                closedLemon2.rotation = random(360);
                closedLemon2.life = 1000;
                break;

            case 3:
                console.log("One"); // Prints "One"
                closedLemon3 = createSprite(walker.position.x, walker.position.y - 120);
                closedLemon3.addAnimation("normal", "closedLemon3001.png");
                closedLemon3.rotation = random(360);
                closedLemon3.life = 1000;
                break;

            case 4:
                console.log("One"); // Prints "One"
                closedLemon4 = createSprite(walker.position.x, walker.position.y - 120);
                closedLemon4.addAnimation("normal", "closedLemon4001.png");
                closedLemon4.rotation = random(360);
                closedLemon4.life = 1000;
                break;
        }

    }

    drawSprites();
} //end of draw

function keyPressed() {
    if (song.isPlaying()) {} else {
        song.play();
    }

    if (keyCode == RIGHT_ARROW) {
        walker.changeAnimation("walking");
        walker.mirrorX(-1);
        walker.setSpeed(1.5, 0);
    } else if (keyCode == DOWN_ARROW) {
        walker.changeAnimation("walking");
        walker.setSpeed(1.5, 90);
    } else if (keyCode == LEFT_ARROW) {
        walker.changeAnimation("walking");
        walker.mirrorX(1);
        walker.setSpeed(1.5, 180);
    } else if (keyCode == UP_ARROW) {
        walker.changeAnimation("walking");
        walker.setSpeed(1.5, -90);
    } else if (key == ' ') {
        walker.changeAnimation("still");
        walker.setSpeed(0, 0);
        song.stop();
    }

} //end of keypressed

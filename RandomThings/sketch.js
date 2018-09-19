/* jshint esversion:6 */
function preload() {
    // put images and stuff here
}
var i = 0;
let h;
let paths = [];

function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    background(51);
    // une énergie de 6 donne 43 paths finaux
    paths.push(new Path(width / 2, height / 2, random(-PI, PI), 6));
    paths[0].probability = 2;
}

function draw() {
    // put drawing code here
    paths.forEach(path => {
        path.act();
        if (random(1, 100) < path.probability && path.energy > path.numberOfSons) {
            paths.push(path.createPath());
            path.probability = 1;
        } else {
            path.probability += 0.01;
        }
    });

}

function windowResized() {
    resizeCanvas(floor(windowWidth - 1), floor(windowHeight - 1));
    background(51);
    paths = [];
    paths.push(new Path(width / 2, height / 2, random(-PI, PI), 6));
}

function mousePressed() {
    paths.push(new Path(mouseX, mouseY, random(-PI, PI), 2));
}
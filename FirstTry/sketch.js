let img;
let saxguy;

function preload() {
    img = loadImage('https://codepo8.github.io/canvas-images-and-pixels/img/horse.png');

    saxguy=loadImage('https://vignette.wikia.nocookie.net/mlg-frag/images/0/0f/Epic_sax_guy.gif/revision/latest?cb=20141124020151');
}

function setup() {
    // put setup code here
    createCanvas(400, 400)
}

let x = Math.PI / 2;
const r=Math.random;

function draw() {
    // put drawing code here

    background(200, 0, 200);
    fill(255, 255, 255);
    const tintFactor = Math.abs(Math.cos(x));
    tint(255 * tintFactor, 255 * tintFactor, 255 * tintFactor);
    image(img, 75, 75);
    noStroke();
    noTint();
    const cote = Math.abs(Math.sin(x)) * (height / 2);
    rect(0, 0, cote, cote);
    image(saxguy, 0, 0, cote, cote);
    rect(width, 0, -cote, cote);
    image(saxguy, width, 0, -cote, cote);
    rect(0, height, cote, -cote);
    image(saxguy, 0, height, cote, -cote);
    rect(width, height, -cote, -cote);
    image(saxguy, width, height, -cote, -cote);
    if (Math.abs(Math.sin(x)) < 1 && Math.abs(Math.sin(x)) >0.99) {
        fill(255*r(), 255*r(), 255*r());
        textSize(30);
        text('Coucou', 150, height/2+10);
    }
    if (Math.abs(Math.sin(x)) < 0.5 && Math.abs(Math.sin(x)) >0) {
        fill(255*r(), 255*r(), 200*r());
        textSize(50);
        text('LOL', 400*r(), 400*r());
    }

    x += 0.01;
}

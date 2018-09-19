let bille;
let tremplin;
let mur;

function preload() {
    // put images and stuff here
}

function setup() {
    // put setup code here
    createCanvas(1080, 720);
    tremplin = new Tremplin();
    bille = new Bille();
    mur = new Mur();
    for (let i = 0; i < 27; i++) {
        mur.ajoutBrique(new Brique(i * 40, Math.random() * height / 4));
    }
}


function draw() {
    // put drawing code here
    background(51);
    mur.show();
    bille.show();
    tremplin.show();
    tremplin.moveMouse(mouseX);
    // if (keyIsDown(LEFT_ARROW)) {
    //     tremplin.move(-1);
    // } else if (keyIsDown(RIGHT_ARROW)) {
    //     tremplin.move(+1);
    // }
    bille.hasHitTremplin(tremplin);
    bille.hasHitBorder();
    mur.briquesHit(bille);
    bille.move();
}
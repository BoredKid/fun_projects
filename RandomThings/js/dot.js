/* jshint esversion:6 */
class Dot {
    constructor(x, y, colorR, colorG, colorB) {
        this.x = x;
        this.y = y;
        this.radius = random(1, 6);
        this.opacity = random(40, 50);
        this.colorR = colorR + random(-50, 50);
        this.colorG = colorG + random(-50, 50);
        this.colorB = colorB + random(-50, 50);
    }

    show() {
        fill(this.colorR, this.colorG, this.colorB, this.opacity);
        noStroke();
        ellipse(this.x, this.y, this.radius);
    }

}
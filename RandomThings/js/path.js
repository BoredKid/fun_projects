/* jshint esversion:6 */
class Path {
    constructor(startX, startY, angle, energy) {
        this.angle = angle;
        this.dots = [];
        this.paths = [];
        this.x = startX;
        this.y = startY;
        this.speed = 4;
        this.signX = 1;
        this.signY = 1;
        this.energy = energy;
        this.numberOfSons = 0;
        this.probability = 1;
        this.colorR = random(0, 255);
        this.colorG = random(0, 255);
        this.colorB = random(0, 255);
        this.previousTurnX = 0;
        this.previousTurnY = 0;
    }

    act() {
        this.progress();
        this.show();
    }

    progress() {
        this.dots = [];
        for (let i = 0; i < 10; i++) {
            this.dots.push(this.createDot());
        }
        if (this.x > width || this.x < 0) {
            if (this.previousTurnX === 0) {
                this.signX *= -1;
                this.previousTurnX = 1;
            }
        } else {
            this.previousTurnX = 0;
        }
        if (this.y > height || this.y < 0) {
            if (this.previousTurnY === 0) {
                this.signY *= -1;
                this.previousTurnY = 1;
            }
        } else {
            this.previousTurnY = 0;
        }
        this.x += floor(this.signX * this.speed * cos(-this.angle)) + floor(random(-12, 12) * sin(-this.angle));
        this.y += floor(this.signY * this.speed * sin(-this.angle)) + floor(random(-12, 12) * cos(-this.angle));

    }

    show() {
        for (const dot of this.dots) {
            dot.show();
        }
    }

    createDot() {
        return new Dot(this.x + random(-2, 2), this.y + random(-10, 10), this.colorR, this.colorG, this.colorB);
    }

    createPath() {
        this.numberOfSons++;
        return new Path(this.x, this.y, random(-PI / 2, PI / 2), floor(this.energy / 2));
    }

}
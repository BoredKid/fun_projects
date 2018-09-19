function Bille() {
    this.x = width / 4;
    this.y = height / 6;
    this.radius = 15;
    this.speed = 5;
    this.angle = 0;

    this.show = function() {
        ellipse(this.x, this.y, this.radius, this.radius);
    };

    this.move = function() {
        this.x += this.speed * Math.sin(this.angle);
        this.y += this.speed * Math.cos(this.angle);
    };

    this.hasHitTremplin = function(object) {
        if (this.distMinTremplin(object) < (this.radius / 2)) {
            const distFromMiddle = this.x - (object.x + object.width / 2);
            const ratio = 2 * distFromMiddle / object.width;
            this.angle += -2 * this.angle + PI - ratio * (PI / 5);
        }
    };

    this.hasHitBorder = function() {
        if (this.y < (1 + this.radius / 2)) {
            this.angle -= 2 * this.angle - PI;
        }
        if (this.x < this.radius / 2) {
            this.angle -= 2 * this.angle - PI + PI;
        }
        if ((width - this.x) < this.radius / 2) {
            this.angle -= 2 * this.angle - PI - PI;
        }
        if (this.y > height) {
            textSize(32);
            fill(255, 0, 255);
            text('Echec', width / 2 - 40, height / 2);
        }
    };


    this.distMinTremplin = function(object) {
        let dmin = dist(this.x, this.y, object.x, object.y);
        for (let i = 1; i < object.width; i++) {
            const d = dist(this.x, this.y, object.x + i, object.y);
            if (d < dmin) {
                dmin = d;
            }
        }
        return dmin;
    }

    this.distMinBrique = function(object) {
        let dmin = dist(this.x, this.y, object.x, object.y);
        let side = "top";
        for (let i = 1; i < object.width; i++) {
            const d = dist(this.x, this.y, object.x + i, object.y);
            if (d < dmin) {
                dmin = d;
                side = "top";
            }
        }
        for (let i = 0; i < object.width; i++) {
            const d = dist(this.x, this.y, object.x + i, object.y + object.height);
            if (d < dmin) {
                dmin = d;
                side = "bottom";
            }
        }
        for (let i = 0; i < object.height; i++) {
            const d = dist(this.x, this.y, object.x, object.y + i);
            if (d < dmin) {
                dmin = d;
                side = "left";
            }
        }
        for (let i = 0; i < object.height; i++) {
            const d = dist(this.x, this.y, object.x + object.width, object.y + i);
            if (d < dmin) {
                dmin = d;
                side = "right";
            }
        }
        return [dmin, side];
    }
}
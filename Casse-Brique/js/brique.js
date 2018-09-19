function Brique(x, y) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.centerX = this.x + this.width / 2;
    this.centerY = this.x + this.height / 2;
    this.hasBeenDestroyed = false;

    this.show = function() {
        rect(this.x, this.y, this.width, this.height);
    }

    this.hasBeenHit = function(bille) {
        const distToBrique = bille.distMinBrique(this);
        if (distToBrique[0] < (bille.radius / 2)) {
            this.rebound(distToBrique[1], bille);
            this.hasBeenDestroyed = true;
        }
    }

    this.rebound = function(side, bille) {
        if (side === "top") {
            bille.angle += 2 * bille.angle - PI;
        } else if (side === "bottom") {
            bille.angle -= 2 * bille.angle - PI;
        } else if (side === "right") {
            bille.angle -= 2 * bille.angle - PI - PI;
        } else if (side === "left") {
            bille.angle -= 2 * bille.angle - PI + PI;
        }

    }
}
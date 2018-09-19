function Tremplin() {
    this.width = 50;
    this.height = 10;
    this.x = width / 2 - this.width / 2;
    this.y = height - 20;
    this.step = 5;

    this.show = function() {
        rect(this.x, this.y, this.width, this.height);
    };

    this.move = function(val) {
        if (val > 0 && this.x < width - this.width) {
            this.x += this.step;
        } else if (val < 0 && this.x > 0) {
            this.x -= this.step;
        }
    }
    this.moveMouse = function(x) {
        this.x = x;
    }
}
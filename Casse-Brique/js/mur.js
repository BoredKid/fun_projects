function Mur() {
    this.briques = [];
    this.ajoutBrique = function(brique) {
        this.briques.push(brique);
    }

    this.show = function() {
        this.briques.forEach(brique => {
            brique.show();
        });
    }

    this.briquesHit = function(bille) {
        this.briques.forEach(brique => {
            brique.hasBeenHit(bille);
        });
        for (let i = this.briques.length - 1; i >= 0; i--) {
            if (this.briques[i].hasBeenDestroyed) {
                this.briques.splice(i, 1);
            }
        }
    }
}
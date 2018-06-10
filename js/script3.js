"use strict";
// Getters & Setters
class Plant {
    constructor() {
        this._species = 'Default';
    }
    get species() {
        return this._species;
    }
    set species(value) {
        if (value.length >= 3) {
            this._species = value;
        }
    }
}
;
const plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'ABC';
console.log(plant.species);
//# sourceMappingURL=script3.js.map
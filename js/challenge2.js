"use strict";
class Car {
    constructor(name, acceleration = 0) {
        this.name = name;
        this.acceleration = acceleration;
    }
    ;
    honk() {
        console.log('Tooooot!');
    }
    ;
    accelerate(speed) {
        this.acceleration += speed;
    }
    ;
}
;
const carObject = new Car('BMW', 2);
carObject.honk();
console.log(carObject.acceleration);
carObject.accelerate(20);
console.log(carObject.acceleration);
//# sourceMappingURL=challenge2.js.map
"use strict";
class BaseObject {
    constructor() {
        this.width = 0;
        this.length = 0;
    }
}
;
class Rectangle extends BaseObject {
    calculateSize() {
        return this.width * this.length;
    }
    ;
}
;
const rect = new Rectangle();
rect.width = 5;
rect.length = 10;
console.log(rect.calculateSize());
//# sourceMappingURL=challenge3.js.map
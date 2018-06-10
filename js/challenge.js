"use strict";
var myMap = /** @class */ (function () {
    function myMap() {
        this.map = {};
    }
    myMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    ;
    myMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    ;
    myMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    ;
    return myMap;
}());
;
console.log('Number Map');
var numberMap = new myMap();
numberMap.setItem('apples', 10);
numberMap.setItem('bananas', 2);
console.log(numberMap.getItem('apples'));
numberMap.printMap();
console.log('-------------------');
console.log('String Map');
var stringMap = new myMap();
stringMap.setItem('apples', '10');
stringMap.setItem('bananas', '2');
console.log(stringMap.getItem('apples'));
stringMap.printMap();
//# sourceMappingURL=challenge.js.map
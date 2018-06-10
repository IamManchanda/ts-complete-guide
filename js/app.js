"use strict";
// Simple Generic Way
var echo = function (data) {
    return data;
};
console.log(echo('Harry'));
console.log(echo(25));
console.log(echo({
    name: 'Harry',
    age: 27,
}));
// Better Generic Way!
var betterEcho = function (data) {
    return data;
};
console.log(betterEcho('Harry'));
console.log(betterEcho(25));
console.log(betterEcho({
    name: 'Harry',
    age: 27,
}));
// Built-in Generics!
var testResults = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);
// Arrays
var printAll = function (args) {
    args.forEach(function (currentItem) { return console.log(currentItem); });
};
printAll(['Apple', 'Banana']);
printAll([10, 20]);
printAll(['Apple', '20']);
// Generic Types
var echo2 = echo;
console.log(echo2('Something'));
// Generic Class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    ;
    return SimpleMath;
}());
;
var sm = new SimpleMath();
sm.baseValue = '10';
sm.multiplyValue = 20;
console.log(sm.calculate());
//# sourceMappingURL=app.js.map
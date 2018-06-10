"use strict";
var myMath;
(function (myMath) {
    let Rectangle;
    (function (Rectangle) {
        Rectangle.calculateRectangle = (width, height = width) => {
            return width * height;
        };
    })(Rectangle = myMath.Rectangle || (myMath.Rectangle = {}));
    ;
    let Circle;
    (function (Circle) {
        Circle.calculateCircumference = (diameter) => {
            const PI = 3.14;
            return diameter * PI;
        };
    })(Circle = myMath.Circle || (myMath.Circle = {}));
    ;
})(myMath || (myMath = {}));
;
var RectangleMath = myMath.Rectangle;
var CircleMath = myMath.Circle;
console.log(RectangleMath.calculateRectangle(10));
console.log(RectangleMath.calculateRectangle(10, 20));
console.log(CircleMath.calculateCircumference(10));
//# sourceMappingURL=script7.js.map
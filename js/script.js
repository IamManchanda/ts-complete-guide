"use strict";
let myName; // String
myName = "Harry Manchanda";
console.log(myName);
let myAge; // Number
myAge = 25;
console.log(myAge);
let hasHobbies; // Boolean
hasHobbies = true;
console.log(hasHobbies);
let hobbies; // Array of Strings
hobbies = ["Cooking", "Sports"];
console.log(hobbies);
let marks; // Array of Numbers
marks = [92, 81, 75];
console.log(marks);
let address; // Tuple (For Array)
address = ["C-3 Janakpuri", 182];
console.log(address);
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Red"] = 3] = "Red";
})(Color || (Color = {}));
let grayColor = Color.Gray;
let greenColor = Color.Green;
let blueColor = Color.Blue;
let redColor = Color.Red;
console.log(grayColor, greenColor, blueColor, redColor);
// Functions
const returnMyName = () => {
    return myName;
};
console.log(returnMyName());
const sayHello = () => {
    console.log('Hello World');
};
sayHello();
const multiply = (value1, value2) => {
    return value1 * value2;
};
console.log(multiply(2, 3));
let myMultiply; // Function Types
myMultiply = multiply;
console.log(myMultiply(2, 3));
// Object Types
let userData;
userData = {
    name: 'Harry',
    age: 25,
};
console.log(userData);
const complexObject = {
    data: [100, 3.99, 10],
    output(all) {
        if (all) {
            return this.data;
        }
        else {
            return [NaN];
        }
    }
};
console.log(complexObject.output(false));
console.log(complexObject.output(true));
// Union Types
let myRealAge;
myRealAge = 24;
console.log(myRealAge);
myRealAge = '24';
console.log(myRealAge);
// Never Type
/*
const neverReturnsThrowsError = (): never => {
  throw new Error('An Error');
};
neverReturnsThrowsError();
*/
// Nullable Types
let canBeNull;
canBeNull = 12;
console.log(canBeNull);
canBeNull = null;
console.log(canBeNull);
let canThisBeAny = null;
console.log(canThisBeAny);
canThisBeAny = 12;
console.log(canThisBeAny);
//# sourceMappingURL=script.js.map
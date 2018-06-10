"use strict";
;
var greet = function (person) {
    console.log("Hello, " + person.firstname + ".\nWe got to know that you are " + (person.age || 24) + " years old");
};
var harry = {
    firstname: 'Harry',
    age: 25,
    greetBack: function (lastname) {
        console.log("Greetings! Yup this is " + this.firstname + " " + lastname);
    },
};
greet(harry);
harry.greetBack('Manchanda');
// Classes
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greetBack = function (lastname) {
        console.log("Greetings! Yup this is " + this.firstname + " " + lastname);
    };
    ;
    return Person;
}());
;
var myPerson = new Person();
myPerson.firstname = 'Harman';
myPerson.greetBack('Singh');
;
var myDouble = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDouble(10, 20));
;
var oldPerson = {
    firstname: 'Donald Trump',
    age: 71,
    greetBack: function (lastname) {
        console.log('Hello');
    },
};
console.log(oldPerson);
//# sourceMappingURL=app.js.map
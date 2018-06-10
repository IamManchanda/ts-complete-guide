"use strict";
// Inheritance
class Person {
    constructor(name, username) {
        this.name = name;
        this.username = username;
    }
    ;
    printAge(age = 0) {
        this.age = age;
        this.setType('Geek');
        return this.age;
    }
    ;
    setType(type) {
        this.type = type;
        console.log(this.type);
    }
    ;
}
;
class Harry extends Person {
    constructor(username, age) {
        super('Harman Manchanda', username);
        this.age = age;
    }
    ;
}
;
const userPerson = new Person('Harry Manchanda', 'IamManchanda');
console.log(userPerson);
console.log(userPerson.name);
console.log(userPerson.username);
console.log(userPerson.printAge(24));
console.log('------------------------------');
const userHarry = new Harry('IamManchanda', 25);
console.log(userHarry);
console.log(userHarry.name);
console.log(userHarry.username);
console.log(userHarry.printAge(26));
//# sourceMappingURL=script2.js.map
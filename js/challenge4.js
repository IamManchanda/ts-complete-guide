"use strict";
class PersonObject {
    constructor() {
        this._firstname = '';
    }
    get firstname() {
        return this._firstname;
    }
    ;
    set firstname(value) {
        if (value.length > 5) {
            this._firstname = value;
        }
        else {
            console.error('More then 5 char. please');
            this._firstname = '';
        }
    }
    ;
}
;
const person = new PersonObject();
console.log('Firstname: ', person.firstname);
person.firstname = 'Harry';
console.log('Firstname: ', person.firstname);
person.firstname = 'Harman';
console.log('Firstname: ', person.firstname);
//# sourceMappingURL=challenge4.js.map
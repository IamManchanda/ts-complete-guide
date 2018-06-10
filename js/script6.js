"use strict";
// Private Constructor
class OnlyOne {
    constructor(name) {
        this.name = name;
    }
    ;
    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
    ;
}
;
// const wrong = new OnlyOne('The Only One');
const right = OnlyOne.getInstance();
console.log(right);
//# sourceMappingURL=script6.js.map
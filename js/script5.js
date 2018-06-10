"use strict";
// Abstract Classes
class Project {
    constructor() {
        this.projectName = 'Default';
        this.budget = 1000;
    }
    calculateBudget() {
        return this.budget * 2;
    }
    ;
}
;
class ITProject extends Project {
    changeName(name) {
        this.projectName = name;
    }
    ;
}
;
const newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);
//# sourceMappingURL=script5.js.map
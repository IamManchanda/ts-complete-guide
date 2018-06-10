"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var logged = function (constructorFn) {
    console.log(constructorFn);
};
var Person = /** @class */ (function () {
    function Person() {
        console.log('Hi!');
    }
    ;
    Person = __decorate([
        logged,
        __metadata("design:paramtypes", [])
    ], Person);
    return Person;
}());
;
// Factory
var logging = function (value) {
    return value ? logged : null;
};
// Advanced
var printable = function (constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
};
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = 'Green Plant';
    }
    Plant = __decorate([
        logging(true),
        printable
    ], Plant);
    return Plant;
}());
;
var plant = new Plant();
plant.print();
// Method & Property Decorators
var editable = function (value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
};
var overwriteable = function (value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value,
        };
        return newDescriptor;
    };
};
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    ;
    Project.prototype.calculateBudget = function () {
        console.log(1000);
    };
    ;
    __decorate([
        overwriteable(true),
        __metadata("design:type", String)
    ], Project.prototype, "projectName", void 0);
    __decorate([
        editable(false),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Project.prototype, "calculateBudget", null);
    return Project;
}());
;
var proj = new Project('Superb Project');
proj.calculateBudget();
/*
proj.calculateBudget = function () {
  console.log(2000);
};
proj.calculateBudget();
console.log(proj);
*/
// Parameter Decorators
var printInfo = function (target, methodName, paramIndex) {
    console.log('Print Info');
    console.log(target);
    console.log(methodName);
    console.log(paramIndex);
};
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    ;
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    ;
    __decorate([
        __param(1, printInfo),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Boolean]),
        __metadata("design:returntype", void 0)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
;
var myCourse = new Course('Super Course');
myCourse.printStudentNumbers('Anything', true);
myCourse.printStudentNumbers('Anything', false);
//# sourceMappingURL=app.js.map
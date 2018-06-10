const logged = (constructorFn: Function) => {
  console.log(constructorFn);
};

@logged
class Person {
  public constructor() {
    console.log('Hi!');
  };
 };

 // Factory
const logging = (value: boolean) => {
  return value ? logged : null;
};

// Advanced
const printable = (constructorFn: Function) => {
  constructorFn.prototype.print = function () {
    console.log(this);
  };
};

@logging(true)
@printable
class Plant {
  public name = 'Green Plant';
};

const plant = new Plant();
(<any>plant).print();

// Method & Property Decorators
const editable = (value: boolean) => {
  return (target: any, propName: string, descriptor: PropertyDescriptor) => {
    descriptor.writable = value;
  };
};

const overwriteable = (value: boolean) => {
  return (target: any, propName: string): any => {
    const newDescriptor: PropertyDescriptor = {
      writable: value,
    };
    return newDescriptor;
  };
};

class Project {
  @overwriteable(true)
  public projectName: string;

  public constructor(name: string) {
    this.projectName = name;
  };

  @editable(false)
  public calculateBudget() {
    console.log(1000);
  };
};

const proj = new Project('Superb Project');
proj.calculateBudget();
/*
proj.calculateBudget = function () {
  console.log(2000);
};
proj.calculateBudget();
console.log(proj); 
*/

// Parameter Decorators
const printInfo = (target: any, methodName: string, paramIndex: number) => {
  console.log('Print Info');
  console.log(target);
  console.log(methodName);
  console.log(paramIndex);
};

class Course {
  public constructor(
    public name: string,
  ) {};

  public printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(10000);
    } else {
      console.log(2000);
    }
  };
};

const myCourse = new Course('Super Course');
myCourse.printStudentNumbers('Anything', true);
myCourse.printStudentNumbers('Anything', false);

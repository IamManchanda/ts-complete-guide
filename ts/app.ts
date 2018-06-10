interface NamedPerson {
  firstname: string;
  age?: number;
  greetBack(lastname: string): void;
};

const greet = (person: NamedPerson): void => {
  console.log(`Hello, ${person.firstname}.\nWe got to know that you are ${person.age || 24} years old`);
};

const harry: NamedPerson = {
  firstname: 'Harry',
  age: 25,
  greetBack(lastname: string) {
    console.log(`Greetings! Yup this is ${this.firstname} ${lastname}`);
  },
};

greet(harry);
harry.greetBack('Manchanda');

// Classes
class Person implements NamedPerson {
  firstname: string;
  greetBack(lastname: string) {
    console.log(`Greetings! Yup this is ${this.firstname} ${lastname}`);
  };
};

const myPerson = new Person();
myPerson.firstname = 'Harman';
myPerson.greetBack('Singh');

// Function Types
interface DoubleValueFunction {
  (number1: number, number2: number): number;
};

const myDouble: DoubleValueFunction = (value1: number, value2: number): number => {
  return (value1 + value2) * 2;
};

console.log( myDouble(10, 20) );

// Interface Inheritance
interface AgedPerson extends NamedPerson {
  age: number;
};

const oldPerson: AgedPerson = {
  firstname: 'Donald Trump',
  age: 71,
  greetBack(lastname: string) {
    console.log('Hello');
  },
};

console.log(oldPerson);

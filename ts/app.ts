// Simple Generic Way
const echo =  (data: any) => {
  return data;
};

console.log( echo('Harry') );
console.log( echo(25) );
console.log( echo({
  name: 'Harry',
  age: 27,
}) );

// Better Generic Way!
const betterEcho = <T>(data: T) => {
  return data;
};

console.log( betterEcho('Harry') );
console.log( betterEcho(25) );
console.log( betterEcho({
  name: 'Harry',
  age: 27,
}) );

// Built-in Generics!
const testResults: number[] = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);

// Arrays
const printAll = <T>(args: T[]) => {
  args.forEach(currentItem => console.log(currentItem));
};
printAll<string>(['Apple', 'Banana']);
printAll<number>([10, 20]);
printAll<string | number>(['Apple', '20']);

// Generic Types
const echo2: <T>(data: T) => T = echo;
console.log( echo2<string>('Something') );

// Generic Class
class SimpleMath<T extends number | string, U extends number | string> {
  public baseValue: T;
  public multiplyValue: U;

  public calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  };
};

const sm = new SimpleMath<string, number>();
sm.baseValue = '10';
sm.multiplyValue = 20;
console.log( sm.calculate() );

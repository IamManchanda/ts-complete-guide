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

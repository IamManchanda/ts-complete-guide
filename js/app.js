"use strict";
// Simple Generic Way
var echo = function (data) {
    return data;
};
console.log(echo('Harry'));
console.log(echo(25));
console.log(echo({
    name: 'Harry',
    age: 27,
}));
// Better Generic Way!
var betterEcho = function (data) {
    return data;
};
console.log(betterEcho('Harry'));
console.log(betterEcho(25));
console.log(betterEcho({
    name: 'Harry',
    age: 27,
}));
//# sourceMappingURL=app.js.map
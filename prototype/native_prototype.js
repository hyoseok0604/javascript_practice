// native prototype

// Object.prototype
let obj = {};
console.log(obj.toString());

// true
console.log(obj.__proto__ === Object.prototype);
console.log(obj.toString === Object.prototype.toString);
console.log(obj.toString === obj.__proto__.toString);

console.log(Object.prototype.__proto__); // null


// Array, Function, Number ...
let arr = [1,2,3];
function f() {}

// true
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);

console.log(f.__proto__ === Function.prototype);
console.log(f.__proto__.__proto__ === Object.prototype);
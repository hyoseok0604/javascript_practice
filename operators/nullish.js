// nullish coalescing operator (??)

let something;
let value;

let x = (something != null && something != undefined) ? something : value;

// assigning a default value to a variable

// || seems to work similarly to ??.
let foo;
let bar = foo || "Hello!";
console.log(bar);

// but left hand-side operand is falsy value
let count = 0;
let string = "";

let a = count || 22;
let b = string || "Hell..";
console.log(a, b);

let _a = count ?? 22;
let _b = string ?? "Hell..";
console.log(_a, _b);

// No chaining with AND or OR operators
//true || false ?? "Hi"; SyntaxError: Unexpected token '??'
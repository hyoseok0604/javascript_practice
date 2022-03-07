// arithmetic operators

let a = 10;
let b = 5;
let plus = a + b; // 15
let minus = a - b; // 5
let multi = a * b; // 50
let exp = a ** b; // 100000
let div = a / b; // 2
let mod = a % b; // 0

console.log(plus, minus, multi, exp, div, mod);

let c = 10;
let increment = c;
let decrement = c;

increment++;
decrement--;

console.log(increment, decrement); // 11 9

// + unary operator
let numberString = "10";
let num = +numberString; // = Number(numberString);

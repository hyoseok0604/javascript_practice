typeof undefined; // undefined

typeof 0; // number

typeof 10n; // bigint

typeof true; // boolean

typeof "foo"; // string

typeof Symbol("id"); // Symbol

typeof Math; // object

typeof null; // object

typeof console.log; // function

typeof typeof console.log; // string

// typeof

// 1. typeof value of typeof is string
// 2. null is object
// 3. function is function, not object
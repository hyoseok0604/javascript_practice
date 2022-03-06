let var1 = "Hi";
const var2 = "Hello";
var var3 = "Hi.";

// let var1 = "Foo";
// SyntaxError: Identifier 'var1' has already been declared

// var2 = "Helloo";
// TypeError: Assignment to constant variable.

var var3 = "Hii";

console.log(var3); // Hii

// var
// 1. Block Scope X, Function Scope O
// 2. var declarations are processed at the start of the function (in global space, at the start of the script).

console.log(var4); // undefined

if (true) {
    var var4 = "Hello World!";
}

console.log(var4); // Hello World!

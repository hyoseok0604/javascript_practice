// Lexical Environment

// Step 1 : variables
// Running Function, Code Block, script have an internal hidden associated object(Lexical Environment).

// Lexical Environment object
// 1. Environment Record - Store All local variables as properties.
// 2. Reference to Outer Lexical Environment - associated with outer code.

// Variable is just a property of special internal object, Environment Record.

// Code 1-1
let helloworld = "HelloWorld"; // helloworld: "HelloWorld"
console.log(helloworld);

// Code 1-2
// me: <uninitialized>
let me; // me: undefined
me = "me"; // me: "me"
me = "Me"; // me: "Me"

// 1. When script start Lexical Environment is pre-populated with all declared variables.
// 2. "let me", me value is undefined.

// Step 2 : function declaration
// somevar: <uninitialized>
// somefun: function
let somevar = "AA"
// somevar: "AA"
// somefun: function
function somefun() {
    console.log("Function");
}

// Step 3 : Inner, Outer Lexical Environment
let ourvar = "Out";

function func(invar) {
    console.log(`${ourvar}, ${invar}`);
}

func("In"); // Out, In

// When func call
// { inver: "In" } --outer--> { func: function, ourvar: "Out" } --outer--> null

// Step 4 : Returning function
function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter = undefined;

// When makeCounter call
// { count: 0 } --outer--> { makeCounter: function, counter: undefined } --outer--> null

// When makeCounter return function
// Function have hidden property [[Environment]],
// that keeps the reference to the Lexical Environment where the function was created.
// counter.[[Environment]] -> { count: 0 } --outer--> { makeCounter: function, counter: undefined } --outer--> null

// When counter()
// find count variable
// 1. function Lexical Environment is empty
// 2. outer Lexical Environment { count: 0 }. Change count.
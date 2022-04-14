// Function Object
function helloWorld() {
    console.log("Hello World");
}

function sayHello(name) {
    console.log(`Hello, ${name}`);
}

function sum(a, b) {
    return a + b;
}

// name property (contextual name)
console.log(helloWorld.name); // helloWorld

// length property
console.log(helloWorld.length); // 0
console.log(sayHello.length); // 1
console.log(sum.length); // 2

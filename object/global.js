// Global Object
// browser : window, Node.js : global
// standard : globalThis

// same
console.log("Hello");
global.console.log("Hello")
globalThis.console.log("Hello")

globalThis.admin = {
    name: "hyoseok"
};

console.log(admin.name);
console.log(globalThis.admin.name);
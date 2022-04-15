// prototype

// object has hidden property [[prototype]]

// object --[[prototype]]--> prototype object

// prototype inheritance
let user = {
    isUser: true,
};

let admin = {
    name: 'hyoseok',
};

admin.__proto__ = user;
console.log(admin.isUser); // true

// prototype chaining
// 1. not allow circular reference.
// 2. __proto__ is always object or null.
let first = {
    firstvalue: "Hello",
};
let second = {
    secondvalue: "World",
    __proto__: first,
};
let third = {
    thirdvalue: "!!!",
    __proto__: second,
};

console.log(third.firstvalue); // Hello

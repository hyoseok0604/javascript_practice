// class

class MyClass {
    constructor() {}
    method1() {}
    method2() {}
    // ...
}

class User {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log(`Hello, ${this.name}`);
    }
}

let user = new User('hyoseok');
user.hello(); // Hello, hyoseok

console.log(typeof User); // function
console.log(typeof user); // object
console.log(User === User.prototype.constructor); // true
console.log(User.prototype.hello.toString());
console.log(Object.getOwnPropertyNames(User.prototype)); // [ 'constructor', 'hello' ]

function UserF(name) {
    this.name = name;
}

UserF.prototype.hello = function() {
    console.log(`Hello, ${this.name}`);
}

let userF = new UserF('hyoseok');
userF.hello();

console.log(User.toString());
/*
class User {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log(`Hello, ${this.name}`);
    }
}
*/
console.log(UserF.toString());
/*
function UserF(name) {
    this.name = name;
}
*/
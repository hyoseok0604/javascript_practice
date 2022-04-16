// class expression

let User = class {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log(`Hello, ${this.name}`);
    }
};

let user = new User('hyoseok');
user.hello();

// dynamic class
function makeClass(something) {
    return class {
        hello() {
            console.log(something);
        }
    }
}

let SomeClass = makeClass('Hello World!');
let some = new SomeClass();
some.hello();
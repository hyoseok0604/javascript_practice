// function binding

// losing this
let admin = {
    name: 'hyoseok',

    hello() {
        console.log(`Hello, ${this.name}`);
    }
};

setTimeout(admin.hello, 100); // Hello, undefined

// 1. wrapper
setTimeout(() => admin.hello(), 200); // Hello, hyoseok

// 2. bind
let hello = admin.hello.bind(admin);
setTimeout(hello, 300); // Hello, hyoseok

// Partial functions
function mul(a, b) {
    return a * b;
}

let double = mul.bind(null, 2);
let triple = mul.bind(null, 3);

console.log(double(3), double(4), triple(3), triple(4)); // 6 8 9 12
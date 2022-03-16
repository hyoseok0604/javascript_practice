// symbol
let symbol = Symbol();

let name = Symbol("name");
let _name = Symbol("name");

// false
console.log(name == _name);
console.log(name === _name);

let user = {
    id: 1,
    name: 'hyoseok',
    age: 22,
};

let id = Symbol("id");

user[id] = 112;

console.log(user.id); // 1
console.log(user[id]); // 112

let admin = {
    id: 2,
    [id]: 3,
};

console.log(admin.id); // 2
console.log(admin[id]); // 3

// for .. in, Object.keys exclude symbol
for (let key in user) {
    console.log(key);
}

// Object.assign include symbol
let clone = Object.assign({}, user);
console.log(user[id]); // 112

// Global symbol
let globalId = Symbol.for("id");

let globalId2 = Symbol.for("id");

console.log(globalId == globalId2); // true

// System symbol
Symbol.isConcatSpreadable;
Symbol.iterator;
Symbol.toPrimitive;
// ...
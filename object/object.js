// object

let something = new Object(); // object constructor
let me = {
    // property
    name: "hyoseok",
    age: 22,
    // multi word
    "hello world": "Hi",
}; // object literal

me.something = true;

console.log(me);

delete me.something;

console.log(me);

me["hello world"] = "Hello";

// computed property
let some = "Hello";

let obj = {
    [some]: "abc",
};

console.log(obj);

function makeUser1(name, age) {
    return {
        name: name,
        age: age,
    }
}

function makeUser2(name, age) {
    return {
        name, // = name: name,
        age, // = age: age,
    }
}

let user1 = makeUser1('admin', 21);
let user2 = makeUser2('hyoseok', 22);

console.log(user1, user2);

// check object contain some property
let hi = {};

console.log(hi.some !== undefined);
console.log("some" in hi);

// for .. in loop
for (let key in user1) {
    console.log(key, user1[key]);
}

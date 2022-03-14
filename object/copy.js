// copy
let user = { name: "hyoseok", };

let admin = user;

admin.name = "foo";

console.log(user.name); // foo

// shallow copy
let clone = {};

for (let key in user) {
    clone[key] = user[key];
}

// shallow copy
let user = { name: "hyoseok", };

let some1 = { age: 22, };
let some2 = { isAdmin: true, };

Object.assign(user, some1, some2);

console.log(user);
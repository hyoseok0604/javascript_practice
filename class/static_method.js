// static method
class User {
    static staticMethod() {
        console.log(this === User);
    }

    method() {
        console.log(this === User);
    }
}

let user = new User();
user.method(); // false
// user.staticMethod(); // TypeError: user.staticMethod is not a function
User.staticMethod(); // true

// same
User.staticMethod = function() {
    console.log(this === User);
}

class UserWithCompare {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static compare(a, b) {
        return a.age - b.age;
    }
}

let users = [
    new UserWithCompare('hyoseok', 22),
    new UserWithCompare('admin', 19),
    new UserWithCompare('abc', 24),
];

users.sort(UserWithCompare.compare);

for(let user of users) {
    console.log(user.name, user.age);
}
/*
admin 19
hyoseok 22
abc 24
*/
/// function prototype
let human = {
    isDie: true,
};

function User(name) {
    this.name = name;
}

User.prototype = human;

let user = new User("hyoseok");

console.log(user.isDie); // true

// default prototype
function Admin(name) { this.name = name; }
console.log(Admin.prototype.constructor == Admin); // true

let admin = new Admin('hyoseok');
console.log(admin.constructor == Admin); // true
let admin2 = new admin.constructor('admin');